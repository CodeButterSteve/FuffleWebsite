import heroLogo from "../assets/Fuffle_logo_1200.png";

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
          <h1 className="hero-title">
            <img src={heroLogo} alt="Fuffle" className="hero-logo" />
          </h1>
          <p className="hero-lede">
            Real-world challenges for meaningful connection.
          </p>
          <p className="hero-sub">
            Fuffle helps you beat loneliness by turning everyday moments into
            in-person challenges. Less scrolling, more real connection.
          </p>
          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-number">1,248</span>
              <span className="stat-label">Challenges completed</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">386</span>
              <span className="stat-label">Levels grown</span>
            </div>
          </div>
        </div>
      </section>

      <section className="purpose">
        <div className="section-inner">
          <h2 className="section-title">Why Fuffle exists</h2>
          <p className="purpose-intro">
            Fuffle is built around a simple idea. Technology should help people
            connect in real life, not replace it.
          </p>
          <div className="purpose-grid">
            <article className="purpose-card">
              <h3>The problem</h3>
              <p>
                Most feeds are designed to keep you watching, comparing, and
                scrolling.
              </p>
            </article>
            <article className="purpose-card">
              <h3>The shift</h3>
              <p>
                Fuffle turns the screen into a starting point for small
                intentional challenges and shared moments.
              </p>
            </article>
            <article className="purpose-card">
              <h3>The purpose</h3>
              <p>
                The goal is not more content. It is more presence, more courage,
                and more real-world connection.
              </p>
            </article>
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

      <section className="flexible">
        <div className="section-inner">
          <h2 className="section-title">Use it your way</h2>
          <p className="flexible-intro">
            Fuffle is designed to fit into real life. Use it with friends, on a
            walk, at an event, while traveling, or whenever you want a reason to
            step out of autopilot.
          </p>
          <div className="flexible-grid">
            <article className="flexible-card">
              <h3>Anywhere</h3>
              <p>Start a challenge wherever life already has you.</p>
            </article>
            <article className="flexible-card">
              <h3>Anytime</h3>
              <p>Use Fuffle for a quick spark or a longer adventure.</p>
            </article>
            <article className="flexible-card">
              <h3>Your pace</h3>
              <p>Choose the moments, people, and challenges that feel right for you.</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
