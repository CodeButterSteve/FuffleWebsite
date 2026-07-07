export default function Privacy() {
  return (
    <div className="page">
      <div className="page-inner">
        <span className="pill">Legal</span>
        <h1 className="page-title">Privacy Policy</h1>
        <p className="page-lede">
          This Privacy Policy explains how Fuffle Inc. collects, uses, and
          protects your information when you use the Fuffle mobile application
          and this website. We built Fuffle to help people connect in the real
          world, and we want to be clear and honest about how your information
          is handled.
        </p>
        <p className="page-body">Last updated: July 6, 2026</p>

        <h2>1. Introduction</h2>
        <p className="page-body">
          Fuffle Inc. ("Fuffle," "we," "us," or "our") operates the Fuffle
          mobile application and the website located at fuffle.app (together, the
          "Services"). By using the Services, you agree to the practices
          described in this Privacy Policy. If you do not agree with this
          policy, please do not use the Services. This policy applies to
          information we handle as part of the current implementation of the
          product and will be updated as Fuffle grows.
        </p>

        <h2>2. Information We Collect</h2>
        <p className="page-body">
          We collect information that you provide directly, information created
          through your use of the Services, and limited technical information
          from your device. The categories below reflect how Fuffle works today.
        </p>

        <h3>2.1 Account Information</h3>
        <p className="page-body">
          When you create an account, we collect the information needed to set
          up and secure your account. This may include your email address, a
          username or display name, and authentication details managed through
          our backend provider. We use this information to identify you, secure
          your account, and communicate with you about the Services.
        </p>

        <h3>2.2 Profile Information</h3>
        <p className="page-body">
          Your profile may include a display name, a photo or avatar if you
          choose to add one, and progress details such as experience points,
          streaks, and category growth. Some profile details may be visible to
          other users within the app depending on the feature you are using.
        </p>

        <h3>2.3 Challenge Completion Data</h3>
        <p className="page-body">
          When you complete a real-world challenge, we may record that the
          challenge was marked complete along with related details such as the
          challenge type, category, and timestamp. This information supports
          your progress tracking, streaks, and experience points.
        </p>

        <h3>2.4 Creator Submissions</h3>
        <p className="page-body">
          If you submit a challenge idea through the Creator feature, we collect
          the content of your submission and associate it with your account so we
          can review it and consider it for the community.
        </p>

        <h3>2.5 Connection Responses</h3>
        <p className="page-body">
          If you create or respond to connection questions, we collect the
          content you provide so the feature can function and so responses can be
          shown in the intended context.
        </p>

        <h3>2.6 Inspire Posts</h3>
        <p className="page-body">
          If you share content through the Inspire feature, we collect the post
          content you choose to share, which may include text and images related
          to challenges you completed.
        </p>

        <h3>2.7 Uploaded Content</h3>
        <p className="page-body">
          When you upload photos or other content, we store that content to
          provide the feature you are using. You are responsible for the content
          you upload and should only upload content you have the right to share.
        </p>

        <h3>2.8 Usage Analytics</h3>
        <p className="page-body">
          We may collect basic information about how the Services are used, such
          as which features are opened and general activity patterns, so we can
          understand what is working and improve the product. We do not use this
          information to build advertising profiles, and we do not sell it.
        </p>

        <h3>2.9 Device Information</h3>
        <p className="page-body">
          We may receive limited technical information from your device, such as
          device type, operating system version, app version, and basic
          diagnostic data. This helps us keep the Services stable and
          troubleshoot problems.
        </p>

        <h3>2.10 Permissions You Control</h3>
        <p className="page-body">
          The mobile app may ask for certain device permissions. You can grant
          or deny these permissions, and you can change them later in your device
          settings. Denying a permission may limit related features.
        </p>
        <ul className="page-body">
          <li>
            Location permissions. Used to support location based features and
            challenges when you choose to enable them. We request location access
            only for the features that need it.
          </li>
          <li>
            Camera permissions. Used when you choose to take a photo for a
            challenge, an Inspire post, or your profile.
          </li>
          <li>
            Photo library permissions. Used when you choose to upload an existing
            photo from your device.
          </li>
          <li>
            Notification permissions. Used to send reminders and updates related
            to challenges, streaks, and activity if you allow them.
          </li>
        </ul>

        <h3>2.11 Cookies and Similar Technologies (Website)</h3>
        <p className="page-body">
          The Fuffle website is designed to be lightweight. We do not use
          advertising cookies or third party tracking scripts on the website.
          Any storage used by the website is limited to what is needed for the
          site to function.
        </p>

        <h2>3. How We Use Information</h2>
        <p className="page-body">
          We use the information described above to operate, maintain, and
          improve the Services. This includes creating and securing your
          account, providing features such as challenges, connection questions,
          Inspire posts, and creator submissions, tracking your progress,
          responding to support requests, reviewing reported content, keeping the
          Services safe, and communicating with you about updates. We use
          information only for purposes that are consistent with this policy.
        </p>

        <h2>4. Legal Basis for Processing</h2>
        <p className="page-body">
          Where a legal basis is required for processing your information, we
          rely on the following: performance of our agreement with you to provide
          the Services, your consent for optional permissions such as location,
          camera, photos, and notifications, and our legitimate interest in
          keeping the Services safe, functional, and improving over time. Where
          consent is the basis, you can withdraw it at any time through your
          device settings.
        </p>

        <h2>5. Third Party Services</h2>
        <p className="page-body">
          We use a small number of trusted service providers to run Fuffle.
          These providers process information on our behalf so we can deliver the
          Services. Their handling of information is governed by their own terms
          and privacy policies.
        </p>
        <ul className="page-body">
          <li>
            Supabase. We use Supabase for backend infrastructure, including
            authentication, database storage, and file storage. Information such
            as account details, profile data, challenge activity, and uploaded
            content may be stored through Supabase.
          </li>
          <li>
            Apple. The mobile app is distributed through the Apple App Store, and
            push notifications on iOS are delivered through Apple services when
            you enable them. Apple may collect information related to app
            distribution under its own policies.
          </li>
          <li>
            Google. If we distribute the app through Google Play or use Google
            services in the future, related information may be processed by Google
            under its own policies. This applies only where such services are
            actually used.
          </li>
          <li>
            Cloudflare. We use Cloudflare to host and serve the Fuffle website.
            Cloudflare may process basic technical request information as part of
            delivering the site securely.
          </li>
        </ul>

        <h2>6. Data Retention</h2>
        <p className="page-body">
          We keep your information for as long as your account is active or as
          needed to provide the Services. We may retain certain information for a
          reasonable period after account deletion where needed to comply with
          legal obligations, resolve disputes, prevent abuse, or enforce our
          agreements. When information is no longer needed, we take steps to
          delete it or remove its association with you.
        </p>

        <h2>7. Your Rights and Choices</h2>
        <p className="page-body">
          You can review and update much of your account and profile information
          within the app. Depending on where you live, you may have additional
          rights regarding your information, such as the right to request access
          to it, request a copy, request correction, or request deletion. To make
          a request, contact us at{" "}
          <a href="mailto:privacy@fuffle.app">privacy@fuffle.app</a>. We will
          respond to verified requests as required by applicable law.
        </p>

        <h2>8. California Privacy Rights</h2>
        <p className="page-body">
          If you are a California resident, you may have the right to request
          information about the personal information we collect, request access
          to or deletion of your personal information, and not receive
          discriminatory treatment for exercising these rights. Fuffle does not
          sell your personal information, and we do not share it for cross
          context behavioral advertising. To exercise a request, contact us at{" "}
          <a href="mailto:privacy@fuffle.app">privacy@fuffle.app</a>. We will
          verify your request before acting on it.
        </p>

        <h2>9. Children's Privacy</h2>
        <p className="page-body">
          Fuffle is not directed to children under the age of 13, and we do not
          knowingly collect personal information from children under 13. If you
          believe a child has provided us with personal information, please
          contact us at{" "}
          <a href="mailto:privacy@fuffle.app">privacy@fuffle.app</a> so we can
          take appropriate action. Additional age requirements may apply under
          our Terms of Service and applicable law.
        </p>

        <h2>10. International Users</h2>
        <p className="page-body">
          Fuffle is operated from the United States, and our service providers
          may store and process information in the United States and other
          locations. If you access the Services from outside the United States,
          you understand that your information may be transferred to and
          processed in the United States, where data protection laws may differ
          from those in your location.
        </p>

        <h2>11. Security</h2>
        <p className="page-body">
          We take reasonable measures designed to protect your information,
          including relying on established infrastructure providers for storage
          and authentication. No method of transmission or storage is completely
          secure, and we cannot guarantee absolute security. You are responsible
          for keeping your account credentials confidential and for notifying us
          if you believe your account has been compromised.
        </p>

        <h2>12. Account Deletion</h2>
        <p className="page-body">
          You can request deletion of your account and associated data by
          emailing{" "}
          <a href="mailto:support@fuffle.app">support@fuffle.app</a> from the
          email address on your account with the subject line Account Deletion
          Request. We will confirm your request and process it within a
          reasonable period. Some information may be retained where needed for
          legal, security, or record keeping purposes as described in the Data
          Retention section.
        </p>

        <h2>13. Changes to This Policy</h2>
        <p className="page-body">
          We may update this Privacy Policy from time to time. When we make
          material changes, we will update the date at the top of this page and,
          where appropriate, provide additional notice. Your continued use of the
          Services after an update means you accept the revised policy.
        </p>

        <h2>14. Contact Us</h2>
        <p className="page-body">
          If you have questions about this Privacy Policy or how your information
          is handled, contact us at{" "}
          <a href="mailto:privacy@fuffle.app">privacy@fuffle.app</a>. For general
          support, contact{" "}
          <a href="mailto:support@fuffle.app">support@fuffle.app</a>. Fuffle Inc.
        </p>
      </div>
    </div>
  );
}
