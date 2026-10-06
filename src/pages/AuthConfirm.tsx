import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Cross-platform post-verification landing page for signup confirmation.
 *
 * Supabase confirms the email server side at `/auth/v1/verify`, then redirects
 * here with the new session in the URL fragment. This page never verifies the
 * email itself and never contacts Supabase. It classifies the incoming
 * fragment/query once, shows a branded success (or recoverable) state, cleans
 * sensitive values out of the visible URL, and on mobile also reopens Fuffle
 * so the app can consume the session through its existing deep-link callback.
 */

/**
 * App-scheme deep link that the Fuffle app registers for its confirmation
 * callback. Kept identical to `AUTH_CONFIRM_APP_DEEP_LINK` in the app's
 * `src/services/auth.ts` so both sides stay in sync.
 */
const APP_DEEP_LINK = "scavenger://auth/confirm";

/**
 * Only these session parameters are forwarded to the app. Anything else in
 * the incoming URL is dropped rather than relayed.
 */
const HANDOFF_KEYS = [
  "access_token",
  "refresh_token",
  "expires_in",
  "expires_at",
  "token_type",
  "type",
] as const;

type Phase = "success" | "invalid" | "missing";

type Captured = {
  phase: Phase;
  /** Fragment (without the leading #) for the app deep link. In memory only. */
  handoff: string;
};

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

/**
 * Read the callback exactly once, before anything can clear it. Called from a
 * lazy state initializer so the captured values exist on the very first
 * render and every later closure (timer, button) sees the same data. Nothing
 * is written to storage and nothing is logged.
 */
function captureCallback(): Captured {
  if (typeof window === "undefined") return { phase: "missing", handoff: "" };

  const { hash, search } = window.location;
  const params = collectAuthParams(hash, search);

  const hasError =
    !!params.error || !!params.error_code || !!params.error_description;

  if (!hasError && params.access_token && params.refresh_token) {
    // Rebuild the fragment from known keys only, in the exact
    // `key=value&key=value` fragment format the app callback parses.
    const handoff = HANDOFF_KEYS.filter((k) => !!params[k])
      .map((k) => `${k}=${encodeURIComponent(params[k])}`)
      .join("&");
    return { phase: "success", handoff };
  }
  if (hasError) return { phase: "invalid", handoff: "" };
  if (!hash && !search) return { phase: "missing", handoff: "" };
  // Unexpected payload: recoverable, never pretend confirmation succeeded.
  return { phase: "invalid", handoff: "" };
}

/** Lightweight mobile check: no dependency, and safe if the guess is wrong. */
function isLikelyMobile(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent || "");
}

export default function AuthConfirm() {
  const [mobile] = useState(isLikelyMobile);
  // Lazy initializer: runs before the first render, so the timer and the
  // button below always close over the real captured session.
  const [captured] = useState<Captured>(captureCallback);
  const { phase, handoff } = captured;

  // Latest handoff for callbacks that outlive a render. Kept in a ref so the
  // automatic attempt and the manual button can never diverge.
  const handoffRef = useRef(handoff);
  handoffRef.current = handoff;
  const autoOpenFired = useRef(false);

  /** Single source for the deep link used by both automatic and manual opens. */
  function buildDeepLink(): string {
    return handoffRef.current
      ? `${APP_DEEP_LINK}#${handoffRef.current}`
      : APP_DEEP_LINK;
  }

  function openFuffle() {
    window.location.href = buildDeepLink();
  }

  // Clear sensitive values from the visible URL, but only after they have been
  // captured into state above.
  useEffect(() => {
    const { hash, search } = window.location;
    if (!hash && !search) return;
    try {
      window.history.replaceState({}, "", window.location.pathname);
    } catch {
      // Non-fatal: the page still works with the fragment visible.
    }
  }, []);

  // On mobile after success, try the deep link once automatically after a
  // short delay. The explicit button always remains available because
  // browsers may block automatic custom-scheme navigation. The fired flag is
  // set inside the timer, so a cleanup and re-run (Strict Mode in dev) still
  // schedules exactly one attempt.
  useEffect(() => {
    if (phase !== "success" || !mobile) return;
    const t = window.setTimeout(() => {
      if (autoOpenFired.current) return;
      autoOpenFired.current = true;
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
