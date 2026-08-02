import React from 'react'
import { useRef } from "react";
import { Parallax } from "react-parallax";
import parallexbg from "./assets/parallexbg.jpeg";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import medical from "./assets/medical.png"
// import structural from "./assets/structural.png"
// import infra from "./assets/infrastructure.png"
// import industrial from "./assets/industrial.png"
import mech from "./assets/electromechanical.png"
import arch from "./assets/arch.png"
// import eductional from "./assets/eductional.png"
import construction from "./assets/construction.png"
import {projects , services} from "./data/projectsData";
import HomeSlider from './HomeSlider'
import { Link } from 'react-router-dom';
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const clients = Array.from(
    { length: 24 },
    (_, i) => `/client/client${i + 1}.png`
  );

  // For sending email
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
    <div>
<div className="home">


<HomeSlider />

{/* -----Who WE Are Bar----- */}
{/* <Parallax
  bgImage={parallexbg}
  strength={400}
> */}

  
<section className="description">
  <div className="container">
  <h1>{t("home.whoTitle")}</h1>
  <p>{t("home.whoDescription")}</p>

</div>
      
      </section>
      {/* </Parallax> */}

{/* -----Client Slider Bar----- */}

<section className="container client-slider">
  <div className="client-title">
  <h2 className="section-title">
  {t("home.clients")}
</h2>
  </div>

  <div className="client-slider-wrapper">
    <div className="slider-track" >
      {[...clients, ...clients].map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt="client logo"
        />
      ))}
    </div>
  </div>
</section>

{/* -----The Expertise Section----- */}

<section className="expertise-sec">
<div className="container">
  <div className="exp-title">
  <h1 className="section-title">
  {t("home.expertise")}
  </h1>
  </div>
{/* <div className="row row-cols-1 row-cols-md-3 g-4 pt-5">
<div className="col">
    <div className="card h-100">
      <img src={construction} className="card-img-top" alt="Construction" />
      <div className="card-body">
        <h5 className="card-title">{t("home.construction")}</h5>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
    <img src={arch} className="card-img-top" alt="..."/>

      <div className="card-body">
        <h5 className="card-title">{t("home.architecture")}</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <img src={mech} className="card-img-top" alt="..."/>

      <div className="card-body">
        <h5 className="card-title">{t("home.mep")}</h5>
      </div>
    </div>
  </div>

</div> */}

<div className="row row-cols-1 row-cols-md-3 g-4 pt-5">

  <div className="col">
    <div className="card expertise-card">
      <img src={construction} className="card-img-top" alt="Construction" />

      <div className="card-body">
        <h5 className="card-title">
          {t("home.construction")}
        </h5>

      <p className="card-text">
  {t("home.constructionDesc")}
</p>

        <Link
          to="/Services"
          className="learn-more"
        >
          {t("home.learnMore")}
<i
  className={`fa-solid ${
    i18n.language === "ar"
      ? "fa-arrow-left"
      : "fa-arrow-right"
  }`}
/>
        </Link>

      </div>
    </div>
  </div>

  <div className="col">
    <div className="card expertise-card">
      <img src={arch} className="card-img-top" alt="" />

      <div className="card-body">
        <h5 className="card-title">
          {t("home.architecture")}
        </h5>

     <p className="card-text">
  {t("home.architectureDesc")}
</p>

        <Link
          to="/Services"
          className="learn-more"
        >
            {t("home.learnMore")}
          <i
  className={`fa-solid ${
    i18n.language === "ar"
      ? "fa-arrow-left"
      : "fa-arrow-right"
  }`}
/>
        </Link>

      </div>
    </div>
  </div>

  <div className="col">
    <div className="card expertise-card">
      <img src={mech} className="card-img-top" alt="" />

      <div className="card-body">
        <h5 className="card-title">
          {t("home.mep")}
        </h5>

     <p className="card-text">
  {t("home.mepDesc")}
</p>

        <Link
          to="/Services"
          className="learn-more"
        >
            {t("home.learnMore")}
          <i
  className={`fa-solid ${
    i18n.language === "ar"
      ? "fa-arrow-left"
      : "fa-arrow-right"
  }`}
/>
        </Link>

      </div>
    </div>
  </div>

</div>


</div>
</section>
{/* -----Our Projects Section----- */}
<section className="projects-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">{t("home.projects")}</h2>
        </div>
    

      <Swiper
        key={i18n.language}
  modules={[Navigation]}
  slidesPerView={3}
  centeredSlides
  loop
  spaceBetween={30}
  speed={1300}
  className="projectsSwiper"


  navigation={{
    prevEl: i18n.language === "ar" ? ".projects-next" : ".projects-prev",
    nextEl: i18n.language === "ar" ? ".projects-prev" : ".projects-next",
  }}
  breakpoints={{
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }}
>
  {projects.map((project, index) => (
    <SwiperSlide  key={project.id}>
        <Link
    to={`/projects/${project.id}`}
    className="text-decoration-none"
  >
  <div className="project-card">
  <img
    src={project.image}
    alt={project.title}
    className="project-img"
  />

  <div className="project-overlay">
 
  <span>{t(`categories.${project.category}`)}</span>
    <h3>{t(`projects.project${project.id}.title`)}</h3>
 


  </div>
</div>
</Link>
    </SwiperSlide>
  ))}
</Swiper>
<div className="project-nav">
  <button className="projects-prev">
    <i className="fa-solid fa-arrow-left"></i>
  </button>

  <button className="projects-next">
    <i className="fa-solid fa-arrow-right"></i>
  </button>
</div>
</div>
    </section>

    {/* -----Contact Section----- */}
    <section className="contact-section">
      <div className="container">
        <div className="left-content">
       
            <h2 className="section-contact-title">{t("home.contactTitle")}</h2>
            <p>{t("home.contactDescription")}</p>
       
        </div>
        <div className="right-form">
  <form
   ref={form}
   onSubmit={sendEmail}
     className="contact-form">

    <input
      type="text"
      placeholder={t("home.name")}
      name='name'
      required
    />

    <input
      type="email"
      placeholder={t("home.email")}
      required
      className='text-success-emphasis'
      name='email'
    />

    {/* <input
      type="tel"
      placeholder="Phone Number"
      required
    /> */}

    <select name='project' required>
    <option value="">{t("home.projectType")}</option>
    <option>{t("home.industrial")}</option>
<option>{t("home.medical")}</option>
<option>{t("home.educational")}</option>
<option>{t("home.infrastructure")}</option>
<option>{t("home.steel")}</option>
<option>{t("home.other")}</option>
    </select>

    <textarea
      name='message'
      rows="5"
      placeholder={t("home.message")}
      required
    ></textarea>

    <button type="submit" className="submit-btn">
    {t("home.send")}
      <i className="fa-solid fa-arrow-right"></i>
    </button>

  </form>
</div>
      </div>
    </section>
      </div>
    </div>
  
  )
}
