import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Cross-platform post-verification landing page for signup confirmation.
 *
 * Supabase confirms the email server side at `/auth/v1/verify`, then redirects
 * here with the new session in the URL fragment. This page never verifies the
 * email itself and never contacts Supabase. It classifies the incoming
 * fragment/query, shows a branded success (or recoverable) state, cleans
 * sensitive values out of the visible URL, and on mobile also offers to reopen
 * Fuffle so the mobile app can consume the same fragment through its existing
 * deep-link callback.
 */

/**
 * App-scheme deep link that the Fuffle app registers for its confirmation
 * callback. Kept identical to `AUTH_CONFIRM_APP_DEEP_LINK` in the app's
 * `src/services/auth.ts` so both sides stay in sync.
 */
const APP_DEEP_LINK = "scavenger://auth/confirm";

type Phase = "success" | "invalid" | "missing";

/**
 * Parse both the query string and the URL fragment into a flat key/value map.
 * Mirrors the app's `collectAuthParams` so the two sides classify the same
 * callback identically.
 */
function collectAuthParams(hash: string, search: string): Record<string, string> {
  const out: Record<string, string> = {};
  const segments: string[] = [];
  if (search && search.length > 1) segments.push(search.slice(1));
  if (hash && hash.length > 1) segments.push(hash.slice(1));
  for (const segment of segments) {
    if (!segment) continue;
    for (const pair of segment.split("&")) {
      if (!pair) continue;
      const eq = pair.indexOf("=");
      const key = eq >= 0 ? pair.slice(0, eq) : pair;
      const value = eq >= 0 ? pair.slice(eq + 1) : "";
      try {
        out[decodeURIComponent(key)] = decodeURIComponent(value);
      } catch {
        out[key] = value;
      }
    }
  }
  return out;
}

/** Lightweight mobile check: no dependency, and safe if the guess is wrong. */
function isLikelyMobile(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  return /iPhone|iPad|iPod|Android/i.test(ua);
}

export default function AuthConfirm() {
  const mobile = useMemo(isLikelyMobile, []);

  const [phase, setPhase] = useState<Phase>("success");
  /**
   * The raw fragment the app deep link needs. Held only in component state
   * for the brief time between landing and the user tapping Open Fuffle.
   * Never sent to any server, never logged, never persisted.
   */
  const [handoffFragment, setHandoffFragment] = useState<string>("");
  const autoOpenTried = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const { hash, search } = window.location;
    const rawFragment = hash && hash.length > 1 ? hash.slice(1) : "";
    const params = collectAuthParams(hash, search);

    const hasError =
      !!params.error || !!params.error_code || !!params.error_description;
    const accessToken = params.access_token;
    const refreshToken = params.refresh_token;

    if (!hasError && accessToken && refreshToken) {
      setHandoffFragment(rawFragment);
      setPhase("success");
    } else if (hasError) {
      setPhase("invalid");
    } else if (!hash && !search) {
      setPhase("missing");
    } else {
      // Some other unexpected payload; treat as recoverable rather than
      // pretending confirmation succeeded.
      setPhase("invalid");
    }

    // Immediately clean the visible URL so tokens do not sit in browser
    // history or share sheets. This does not affect the in-memory copy above
    // that the Open Fuffle handoff still needs.
    if (hash || search) {
      try {
        window.history.replaceState({}, "", window.location.pathname);
      } catch {
        // Non-fatal: an old browser without history API is still a usable
        // success page, just with the fragment visible.
      }
    }
  }, []);

  /**
   * Reopen the Fuffle app with the same tokens Supabase issued, so the mobile
   * app's confirmation callback can establish the session and continue to
   * first-time profile setup. Constructing the deep link at click time keeps
   * the fragment out of anchor hover text and out of link-preview tooling.
   */
  function openFuffle() {
    if (!handoffFragment) {
      window.location.href = APP_DEEP_LINK;
      return;
    }
    window.location.href = `${APP_DEEP_LINK}#${handoffFragment}`;
  }

  // On mobile after success, try the deep link once automatically after a
  // short delay so the user does not have to tap twice in the common case.
  // The explicit button always remains available because browsers may block
  // automatic custom-scheme navigation.
  useEffect(() => {
    if (phase !== "success") return;
    if (!mobile) return;
    if (autoOpenTried.current) return;
    autoOpenTried.current = true;
    const t = window.setTimeout(() => {
      openFuffle();
    }, 900);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, mobile]);

  if (phase === "success") {
    return (
      <div className="page">
        <div className="page-inner auth-confirm">
          <span className="pill">Email confirmed</span>
          <h1 className="page-title">Account created successfully</h1>
          <p className="page-lede">
            Your email is confirmed and your Fuffle account is ready.
          </p>

          {mobile ? (
            <>
              <p className="page-body">
                Open Fuffle to finish setting up your profile.
              </p>
              <div className="auth-actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={openFuffle}
                >
                  Open Fuffle
                </button>
              </div>
              <p className="auth-hint">
                If Fuffle does not open, make sure the app is installed on this
                device and tap Open Fuffle again.
              </p>
            </>
          ) : (
            <>
              <p className="page-body">
                Open Fuffle on your phone to finish setting up your profile.
              </p>
              <p className="auth-hint">
                You can now sign in with the email and password you created.
              </p>
              <div className="auth-actions">
                <Link to="/" className="btn btn-ghost">
                  Back to home
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  if (phase === "invalid") {
    return (
      <div className="page">
        <div className="page-inner auth-confirm">
          <span className="pill">Confirmation link</span>
          <h1 className="page-title">This confirmation link is no longer valid</h1>
          <p className="page-lede">
            The link may have already been used or expired. If you have already
            confirmed your email, your account is ready and you can sign in.
          </p>
          <p className="page-body">
            To try again, open Fuffle and request a new confirmation email from
            the sign-in screen.
          </p>
          <div className="auth-actions">
            {mobile ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={openFuffle}
              >
                Open Fuffle
              </button>
            ) : null}
            <Link to="/support" className="btn btn-ghost">
              Get help
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-inner auth-confirm">
        <span className="pill">Fuffle</span>
        <h1 className="page-title">Confirm your email</h1>
        <p className="page-lede">
          This page confirms your Fuffle account after you tap the button in
          the confirmation email we sent you.
        </p>
        <p className="page-body">
          If you were expecting to see a success message, open the confirmation
          email again from your inbox and tap Confirm Email.
        </p>
        <div className="auth-actions">
          <Link to="/" className="btn btn-ghost">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
