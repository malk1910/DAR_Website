import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";


export default function NotFound() {
  const { t } = useTranslation();
  
  return (
    <>

    <section className="not-found">
      <div className="container">

        <h1>404</h1>

        <h2>{t("notFound.title")}</h2>

        <p>{t("notFound.desc")}</p>


        <Link to="/" className="home-btn">
  {t("notFound.button")}
  <i className="fa-solid fa-arrow-right ms-2"></i>
</Link>

      </div>
    </section>

    </>
  )
}
