import { Link } from "react-router-dom";
import PageHero from "./PageHero";
import bg from "./assets/helmetConst.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(

        "service_dar09",

        "template_3py1xzh",

        form.current,

        "o2Tcj_7yKT8h61AV1"

    )

    .then(() => {

        alert("Message Sent Successfully");

    })

    .catch((error) => {

        console.log(error);

        alert("Failed");

    });

    e.target.reset();

};

  return (
    <>

<PageHero
  title={t("contact.heroTitle")}
  subtitle={t("contact.heroSubtitle")}
  // bgImage={bg}
/>

<section className="contact-wrapper">
  <div className="container">

    <div className="contact-card">

      <div className="row g-5 align-items-start">

        {/* Left Side */}

        <div className="col-lg-5">

          <div className="section-content">

          <h2 className="section-title">
  {t("contact.getInTouch")}
</h2>
<p>{t("contact.description")}</p>

          </div>

          <div className="contact-info">

            <div className="info-item">

              <i className="fa-solid fa-location-dot"></i>

              <div>
              <h5>{t("contact.headOffice")}</h5>
              <p>{t("contact.address")}</p>
              </div>

            </div>

            <div className="info-item">

              <i className="fa-solid fa-envelope"></i>

              <div>

              <h5>{t("contact.email")}</h5>
                <p>info@dar.com.eg</p>

              </div>

            </div>

            <div className="info-item">

              <i className="fa-solid fa-phone"></i>

              <div>

              <h5>{t("contact.phone")}</h5>
                <p className="phone-number">
                  +20 100 101 6416 <br />
                  02 38339000
                </p>

              </div>

            </div>

          </div>

          <h5 className="mt-5">
  {t("contact.follow")}
</h5>
          <div className="social-icons-footer mt-3">

            <Link to="/" className="social-link">
              <i className="fa-brands fa-facebook-f"></i>
            </Link>

            <Link to="/" className="social-link">
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>

            <Link to="/" className="social-link">
              <i className="fa-brands fa-x-twitter"></i>
            </Link>

            <Link to="/" className="social-link">
              <i className="fa-brands fa-instagram"></i>
            </Link>

          </div>

        </div>

        {/* Right Side */}

        <div className="col-lg-7">

        <form
ref={form}
onSubmit={sendEmail}
className="contact-form"
>

            <input type="text" name="name" placeholder={t("contact.fullName")} />

            <input type="email" name="email" placeholder={t("contact.emailPlaceholder")} />
            <input
      type="tel"
      name="phone"
      placeholder={t("contact.phonePlaceholder")}
      required
      className="phone-input"
    />

            <select name="project">

              <option>{t("contact.projectType")}</option>

              <option>{t("categories.Industrial")}</option>

              <option>{t("categories.Medical")}</option>

              <option>{t("categories.Educational")}</option>

              <option>{t("categories.Infrastructure")}</option>

              <option>{t("contact.other")}</option>

            </select>

            <textarea
            name="message"
              rows="6"
              placeholder={t("contact.message")}
            ></textarea>

            <button type="submit" className="submit-btn">

            {t("contact.send")}

              <i className="fa-solid fa-paper-plane ms-2"></i>

            </button>

          </form>

        </div>

      </div>

    </div>

  </div>
</section>
    </>
  );
}