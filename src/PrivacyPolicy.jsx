import PageHero from "./PageHero";
import bg from "./assets/helmetConst.png";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
    const { t } = useTranslation();

  return (
    <>
      <PageHero
        title={t("privacy.title")}
        subtitle={t("privacy.subtitle")}
        bgImage={bg}
      />

      <section className="privacy-page">
        <div className="container">

          <div className="privacy-card">

          <h2>{t("privacy.title")}</h2>
          <p>{t("privacy.intro")}</p>
            <h4>{t("privacy.informationCollect")}</h4>
            <p>{t("privacy.collectText")}</p>
            <ul>
            <li>{t("privacy.name")}</li>
<li>{t("privacy.email")}</li>
<li>{t("privacy.phone")}</li>
<li>{t("privacy.project")}</li>
<li>{t("privacy.message")}</li>
            </ul>

            <h4>{t("privacy.howUse")}</h4>
            <p>{t("privacy.useText")}</p>

            <ul>
            <li>{t("privacy.use1")}</li>
<li>{t("privacy.use2")}</li>
<li>{t("privacy.use3")}</li>
<li>{t("privacy.use4")}</li>
            </ul>

            <h4>{t("privacy.sharing")}</h4>
            <p>{t("privacy.sharingText")}</p>

            <h4>{t("privacy.security")}</h4>
            <p>{t("privacy.securityText")}</p>

            <h4>{t("privacy.thirdParty")}</h4>
            <p>{t("privacy.thirdPartyText")}</p>

            <h4>{t("privacy.rights")}</h4>
            <p>{t("privacy.rightsText")}</p>

            <h4>{t("privacy.contact")}</h4>
            <p>{t("privacy.contactText")}</p>

            <p className="privacy-contact">
              info@dar.com.eg
            </p>
            <p className="last-update">
  {t("privacy.updated")}
</p>

          </div>

        </div>
      </section>
    </>
  );
}