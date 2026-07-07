import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, type ReactNode } from "react";
import logo from "../assets/Fuffle_logo_600.png";

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(false);
  }, [pathname]);

  return (
    <div className="app">
      <header className="nav">
        <div className="nav-inner">
          <Link to="/" className="brand" aria-label="Fuffle home">
            <img src={logo} alt="Fuffle" className="brand-logo" />
          </Link>

          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav-links ${open ? "is-open" : ""}`}>
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>
            <NavLink to="/support" className="nav-link">
              Support
            </NavLink>
            <NavLink to="/privacy" className="nav-link">
              Privacy
            </NavLink>
            <NavLink to="/terms" className="nav-link">
              Terms
            </NavLink>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="brand">
              <img src={logo} alt="Fuffle" className="brand-logo footer-logo" />
            </div>
            <p className="footer-tag">
              Real-world challenges for meaningful connection.
            </p>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h4>Company</h4>
              <span>Fuffle Inc.</span>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <a href="mailto:support@fuffle.app">support@fuffle.app</a>
              <a href="mailto:privacy@fuffle.app">privacy@fuffle.app</a>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/support">Support</Link>
            </div>
          </div>
        </div>
        <div className="footer-base">
          <span>Copyright {new Date().getFullYear()} Fuffle Inc.</span>
          <span>Coming soon to iOS</span>
        </div>
      </footer>
    </div>
  );
}
