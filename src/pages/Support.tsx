export default function Support() {
  return (
    <div className="page">
      <div className="page-inner">
        <span className="pill">Support</span>
        <h1 className="page-title">Support</h1>
        <p className="page-lede">
          We are here to help. Send us a message and we will get back to you.
        </p>

        <div className="support-grid">
          <div className="support-card">
            <h3>General help</h3>
            <p>
              Questions, feedback, or something not working. Email us and include
              as much detail as you can so we can help fast.
            </p>
            <a className="support-email" href="mailto:support@fuffle.app">
              support@fuffle.app
            </a>
          </div>

          <div className="support-card">
            <h3>Privacy questions</h3>
            <p>
              For anything about your data or privacy, reach our privacy inbox
              directly.
            </p>
            <a className="support-email" href="mailto:privacy@fuffle.app">
              privacy@fuffle.app
            </a>
          </div>
        </div>

        <div className="support-note">
          <h3>Request account deletion</h3>
          <p>
            To delete your account and associated data, email{" "}
            <a href="mailto:support@fuffle.app">support@fuffle.app</a> from the
            address on your account with the subject line Account Deletion
            Request. We will confirm and process your request.
          </p>
        </div>
      </div>
    </div>
  );
}
