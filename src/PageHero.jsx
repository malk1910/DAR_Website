import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import bgMobile from "./assets/helmetConst-mobile.png";
import defaultHero from "./assets/helmetConst.png";
import defaultHeroMobile from "./assets/helmetConst-mobile.png";


export default function PageHero({
  title,
  subtitle,
  bgImage,
  breadcrumb,
  children,
}) {
  const { t } = useTranslation();
// const isMobile = window.matchMedia("(max-width:768px)").matches;


const isMobile = window.matchMedia("(max-width:768px)").matches;

const heroImage = bgImage
  ? bgImage
  : (isMobile ? defaultHeroMobile : defaultHero);

  return (
    <>


    <section
  className="page-hero"
  style={{
    backgroundImage: `url(${heroImage})`,
  }}
>

      {/* <section
        className="page-hero"
          style={{
    backgroundImage: `url(${isMobile ? bgMobile : bgImage})`,
  }} */}



{/* //  style={{
//   backgroundImage: `url(${bgImage})`,
// }}
> */}
   
        <div className="page-overlay"></div>

        <div className="container page-content">


        <p className="breadcrumb">
  {breadcrumb ? (
    breadcrumb
  ) : (
    <>
  <Link to="/">{t("navbar.home")}</Link> / {title}
</>
  )}
</p>
         

          <h1>{title}</h1>

          <p>{subtitle}</p>

          <div className="blue-line"></div>

        </div>
      </section>

      {children}
    </>
  );
}