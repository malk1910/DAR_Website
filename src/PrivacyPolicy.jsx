import PageHero from "./PageHero";
import bg from "./assets/helmetConst.png";

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Your Privacy Matters to Us"
        bgImage={bg}
      />

      <section className="privacy-page">
        <div className="container">

          <div className="privacy-card">

            <h2>Privacy Policy</h2>

            <p>
              At <strong>DAR Construction & Engineering</strong>, we respect
              your privacy and are committed to protecting the personal
              information you provide through our website.
            </p>

            <h4>Information We Collect</h4>

            <p>
              When you contact us through our forms, we may collect the
              following information:
            </p>

            <ul>
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Project Type</li>
              <li>Your Message</li>
            </ul>

            <h4>How We Use Your Information</h4>

            <p>
              The information you submit is used solely to:
            </p>

            <ul>
              <li>Respond to your inquiries.</li>
              <li>Provide project consultations.</li>
              <li>Communicate regarding our services.</li>
              <li>Improve our customer support.</li>
            </ul>

            <h4>Information Sharing</h4>

            <p>
              We do not sell, rent, or share your personal information with
              third parties except when required by law.
            </p>

            <h4>Data Security</h4>

            <p>
              We take reasonable measures to protect your information from
              unauthorized access, disclosure, or misuse.
            </p>

            <h4>Third-Party Services</h4>

            <p>
              Our website may use trusted third-party services, such as
              EmailJS, solely for sending contact form submissions securely.
            </p>

            <h4>Your Rights</h4>

            <p>
              You may request access to, correction of, or deletion of your
              personal information by contacting us.
            </p>

            <h4>Contact Us</h4>

            <p>
              If you have any questions regarding this Privacy Policy,
              please contact us at:
            </p>

            <p className="privacy-contact">
              info@dar.com.eg
            </p>

            <p className="last-update">
              Last Updated: July 2026
            </p>

          </div>

        </div>
      </section>
    </>
  );
}