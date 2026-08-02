import LogowithSlogan from "./assets/LogowithSlogan.png";
import { useTranslation } from "react-i18next";

export default function LoadingScreen() {
    const { t } = useTranslation();

  return (
    <div className="loading-screen">

      <div className="loading-content">

        <img
          src={LogowithSlogan}
          alt="DAR"
          className="loading-logo"
        />
<h2>{t("loading.line1")}</h2>
<h2>{t("loading.line2")}</h2>

        <div className="loading-bar">
          <span></span>
        </div>

      </div>

    </div>
  );
}