import React from "react";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header({ title }) {
  const { t } = useTranslation();
  
  return (
    <div className="about-header">

      <p>
      <Link to="/">{t("navbar.home")}</Link> / {title}
      </p>

      <h1>{title}</h1>

      <h5>
      {t("header.subtitle")}
      </h5>

      <div className="blue-line"></div>

    </div>
  );
}