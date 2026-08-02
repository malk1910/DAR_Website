import { Parallax } from "react-parallax";
import Header from "./Header";
import bgHeader from "./assets/workers.png";
import bgMobileHeader from "./assets/workers-mobile.png";
import { useTranslation } from "react-i18next";



export default function About() {
  const { t } = useTranslation();
    const clients = Array.from(
        { length: 24 },
        (_, i) => `/client/client${i + 1}.png`
      );

      const isMobile = window.innerWidth <= 768;
  return (
    <div>


<Parallax
  className="parallax"
  bgImage={isMobile ? undefined : bgHeader}
  strength={isMobile ? 0 : 400}
  style={{
    background: isMobile ? "rgba(14, 29, 60,0.75)" : "transparent",
  }}
  bgImageStyle={{
    width: "100%",
    height: "90%",
    objectFit: "cover",
    margin: "auto",
  }}
>
   
    {/* <Parallax
    className="parallax"
    bgImage={bg}
    strength={400}
    bgImageStyle={{
      width: "100%",
      height: "90%",
      objectFit: "cover",
      margin: "auto",
    }}
  > */}
 
      <section className="about-parallax">

        <div className="overlay"></div>

        <Header title={t("about.title")} />
        {/* White Wave */}

        <div className="wave"></div>

        {/* Cards */}

        <div className="container cards-container">

          <div className="row g-4">

            <div className="col-lg-4">

              <div className="about-card">

                <div className="icon">
                  <i className="fa-solid fa-eye"></i>
                </div>

                <h3>{t("about.strategy")}</h3>

                <div className="blue-line"></div>

                <p>{t("about.strategyDesc")}</p>
               

              </div>

            </div>

            <div className="col-lg-4">

              <div className="about-card">

                <div className="icon">
                  <i className="fa-solid fa-bullseye"></i>
                </div>

                <h3>{t("about.mission")}</h3>

                <div className="blue-line"></div>


<p>{t("about.missionDesc")}</p>

              </div>

            </div>

            <div className="col-lg-4">

              <div className="about-card">

                <div className="icon">
                  <i className="fa-solid fa-gem"></i>
                </div>

                <h3>{t("about.vision")}</h3>

                <div className="blue-line"></div>

                <p>{t("about.visionDesc")}</p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="about-bottom">

        <h2>
  {t("about.building")}
  <br />
  <span>{t("about.trust")}</span>
</h2>
          <div className="blue-line"></div>

        </div>

      </section>
    </Parallax>

    <section className="clients">

<div className="container">

  <div className="text-center mb-5">
    <h2 className="section-title">  {t("about.clients")} </h2>
  </div>

  <div className="row g-4">

    {clients.map((logo, index) => (
      <div
        className="col-6 col-sm-4 col-md-3 col-lg-2"
        key={index}
      >
        <div className="client-card">

          <img
            src={logo}
            alt={`Client ${index + 1}`}
            className="img-fluid"
          />

        </div>
      </div>
    ))}

  </div>

</div>

</section>

    </div>
  );
}