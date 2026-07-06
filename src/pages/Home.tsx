import { Link } from "react-router-dom";

const features = [
  {
    key: "home",
    tag: "Home",
    title: "Discover real-world challenges",
    body: "Browse a fresh feed of in-person challenges built to get you out into the world.",
    accent: "var(--c-home)",
  },
  {
    key: "connection",
    tag: "Connection",
    title: "Better conversations",
    body: "Prompts and challenges that spark real talk instead of endless scrolling.",
    accent: "var(--c-connection)",
  },
  {
    key: "inspire",
    tag: "Inspire",
    title: "See what people completed",
    body: "Get inspired by the challenges others finished and find your next move.",
    accent: "var(--c-inspire)",
  },
  {
    key: "creator",
    tag: "Creator",
    title: "Submit challenge ideas",
    body: "Have an idea worth doing. Send it in and help shape what the community tries next.",
    accent: "var(--c-creator)",
  },
  {
    key: "profile",
    tag: "Profile",
    title: "XP, streaks, and category growth",
    body: "Track your progress with experience, streaks, and growth across every category.",
    accent: "var(--c-profile)",
  },
];

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-inner">
          <span className="pill">Coming soon to iOS</span>
          <h1 className="hero-title">Fuffle</h1>
          <p className="hero-lede">
            Real-world challenges for meaningful connection.
          </p>
          <p className="hero-sub">
            Fuffle helps you beat loneliness by turning everyday moments into
            in-person challenges. Less scrolling, more real connection.
          </p>
          <div className="hero-actions">
            <Link to="/support" className="btn btn-primary">
              Get support
            </Link>
            <Link to="/privacy" className="btn btn-ghost">
              How we handle data
            </Link>
          </div>
        </div>
      </section>

      <section className="promise">
        <div className="section-inner">
          <h2 className="section-title">What Fuffle is</h2>
          <p className="promise-body">
            Fuffle is a simple app for doing real things with real people. Pick a
            challenge, step away from the screen, and connect in person. Every
            challenge is built to make the world feel a little smaller and a lot
            friendlier.
          </p>
        </div>
      </section>

      <section className="features">
        <div className="section-inner">
          <h2 className="section-title">Built for real connection</h2>
          <div className="feature-grid">
            {features.map((f) => (
              <article className="feature-card" key={f.key}>
                <span
                  className="feature-tag"
                  style={{ color: f.accent, borderColor: f.accent }}
                >
                  {f.tag}
                </span>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-body">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="safety">
        <div className="section-inner">
          <div className="safety-card">
            <h2 className="section-title">Stay safe out there</h2>
            <p>
              Use your judgment, respect other people, and follow your local
              laws. Fuffle challenges are meant to be positive and safe. Skip
              anything that feels wrong for you or your surroundings.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
