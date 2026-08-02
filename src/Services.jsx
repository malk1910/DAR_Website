import PageHero from "./PageHero";
import bg from "./assets/helmetConst.png";
import { projects, services } from "./data/projectsData";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Services() {
  const { t } = useTranslation();

  useEffect(() => {
  AOS.init({
    duration: 900,
    once: true,
    easing: "ease-out-cubic",
  });
}, []);


  return (
    <>
     <PageHero
  title={t("services.title")}
  subtitle={t("services.subtitle")}
  // bgImage={bg}
/>

      <section className="services-intro py-5">
        <div className="container text-center mb-4">

        <h2 className="section-title mx-auto py-3">
{t("services.heading")}
</h2>

<p>{t("services.description")}</p>

        </div>
      </section>

    
{/* ///////////////////////////////////////// */}

      <section className="service-blocks">
  <div className="container">


<div
  className="service-block"
  data-aos="fade-up"
  data-aos-delay="0"
>
    {/* <div className="service-block"> */}

      <div className="service-number">
        01
      </div>

      <div className="service-content">

      <h2>{t("services.designBuild")}</h2>

        <div className="border-line"></div>

        <ul>

         <li>{t("services.engineeringDesign")}</li>
<li>{t("services.structuralAnalysis")}</li>
<li>{t("services.shopDrawings")}</li>
<li>{t("services.projectPlanning")}</li>
<li>{t("services.quantitySurveying")}</li>

        </ul>

        {/* <Link
          to="/Projects?service=Consultancy"
          className="service-link"
        >
          View Related Projects
          <i className="fa-solid fa-arrow-right"></i>
        </Link> */}

      </div>

    </div>



<div
  className="service-block"
  data-aos="fade-up"
  data-aos-delay="150"
>
    {/* <div className="service-block"> */}

      <div className="service-number">
        02
      </div>

      <div className="service-content">

      <h2>{t("services.supply")}</h2>

        <div className="border-line"></div>

        <ul>

<li>{t("services.steelStructures")}</li>
<li>{t("services.constructionMaterials")}</li>
<li>{t("services.mepEquipment")}</li>
<li>{t("services.electricalPanels")}</li>
<li>{t("services.mechanicalEquipment")}</li>

        </ul>

      </div>

    </div>



<div
  className="service-block"
  data-aos="fade-up"
  data-aos-delay="300"
>
    {/* <div className="service-block"> */}

      <div className="service-number">
        03
      </div>

      <div className="service-content">

      <h2>{t("services.installation")}</h2>

        <div className="border-line"></div>

        <ul>


<li>{t("services.steelStructures")}</li>
<li>{t("services.mepSystems")}</li>
<li>{t("services.infrastructureNetworks")}</li>
<li>{t("services.architecturalFinishes")}</li>
<li>{t("services.civilWorks")}</li>
        </ul>

      </div>

    </div>



<div
  className="service-block"
  data-aos="fade-up"
  data-aos-delay="450"
>
    {/* <div className="service-block"> */}

      <div className="service-number">
        04
      </div>

      <div className="service-content">

      <h2>{t("services.maintenance")}</h2>

        <div className="border-line"></div>

        <ul>

<li>{t("services.buildingMaintenance")}</li>
<li>{t("services.mepMaintenance")}</li>
<li>{t("services.facilityUpgrades")}</li>
<li>{t("services.assetRehabilitation")}</li>
<li>{t("services.periodicInspection")}</li>
        </ul>



      </div>

    </div>

  </div>
</section>


      <section className="why-dar">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-10 mx-auto">

              <h2 className="section-title">
              {t("services.whyTitle")}
                </h2>

              <ul>

              <li>✔ {t("services.why1")}</li>
<li>✔ {t("services.why2")}</li>
<li>✔ {t("services.why3")}</li>
<li>✔ {t("services.why4")}</li>
<li>✔ {t("services.why5")}</li>
<li>✔ {t("services.why6")}</li>


              </ul>

            </div>

          

          </div>

        </div>

      </section>
    </>
  );
}