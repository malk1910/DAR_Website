import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <div className="footer p-5">
        <div className="container text-right">
          <div className="row g-5">
            <div className="col col-12 col-md-6 col-lg-4">
              <span></span>
              <h4>{t("footer.company")}</h4>
              <p className="footer-desc">
  {t("footer.description")}
</p>
              <div className="social-icons-footer d-flex gap-2 mt-4">
                <Link to="/" className="social-link">
                  <i className="fa-brands fa-facebook"></i>
                </Link>
                <Link to="/" className="social-link">
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
                <Link to="/" className="social-link">
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>
                <Link to="/" className="social-link">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </div>
            </div>


            <div className="col col-6 col-md-3 col-lg-4">
            <h4>{t("footer.overview")}</h4>
                <div className="footer-links">
                <Link to="/Home">{t("navbar.home")}</Link>
                <Link to="/About">{t("navbar.about")}</Link>
                <Link to="/Services">{t("navbar.services")}</Link>
                <Link to="/Projects">{t("navbar.projects")}</Link>

              </div>
            </div>

            <div className="col col-6 col-md-3 col-lg-4">
            <h4>{t("footer.quickLinks")}</h4>
              <div className="footer-links">
              <Link to="/Contact">
  {t("footer.contact")}
</Link>
<Link to="/PrivacyPolicy">
  {t("footer.privacy")}
</Link>

              </div>
            </div>
          
           
          </div>
        </div>
        <hr></hr>

        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-md-6">{t("footer.copyright")}</div>
           
          </div>
        </div>
      </div>
    </>
  );
}
