import React from 'react'
import { useRef } from "react";
import { Parallax } from "react-parallax";
import parallexbg from "./assets/parallexbg.jpeg";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import medical from "./assets/medical.png"
import structural from "./assets/structural.png"
import infra from "./assets/infrastructure.png"
import industrial from "./assets/industrial.png"
import mech from "./assets/electromechanical.png"
import eductional from "./assets/eductional.png"
import {projects , services} from "./data/projectsData";
import HomeSlider from './HomeSlider'
export default function Home() {

  const clients = Array.from(
    { length: 24 },
    (_, i) => `/client/client${i + 1}.png`
  );

    // const projects = Array.from(
    //   { length: 18 },
    //   (_, i) => `/projects/project${i + 1}.png`
    // );
//     const prevRef = useRef(null);
// const nextRef = useRef(null);

  return (
    <div>
<div className="home">


<HomeSlider />

{/* -----Who WE Are Bar----- */}
<Parallax
  bgImage={parallexbg}
  strength={400}
>
<section className="description">
  <div className="container">
  <h1>Who We Are</h1>
  <p>DAR is a dynamic construction and engineering company committed to delivering high-quality, sustainable, and innovative solutions across a wide range of sectors, including industrial, medical, educational, and infrastructure projects. With a strong focus on quality, safety, and client satisfaction, we transform ideas into successful realities through professional project execution, technical expertise, and a dedication to excellence. At DAR, we build more than structures—we build trust, long-term partnerships, and a better future.
</p>
</div>
      
      </section>
      </Parallax>

{/* -----Client Slider Bar----- */}

<section className="container client-slider">
  <div className="client-title">
    <h2 className="section-title">Our Clients</h2>
  </div>

  <div className="client-slider-wrapper">
    <div className="slider-track">
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
    Our Expertise
  </h1>
  </div>
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
    <img src={structural} className="card-img-top" alt="..."/>

      <div className="card-body">
        <h5 className="card-title">Steel Structures</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <img src={industrial} className="card-img-top" alt="..."/>

      <div className="card-body">
        <h5 className="card-title">Industrial Projects</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <img src={medical} className="card-img-top" alt="..."/>

      <div className="card-body">
        <h5 className="card-title">Medical Construction</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <img src={eductional} className="card-img-top" alt="..."/>

      <div className="card-body">
        <h5 className="card-title">Eductional Constructions</h5>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
    <img src={infra} className="card-img-top" alt="..."/>

      <div className="card-body">
        <h5 className="card-title">Infrastructures & Civil works</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <img src={mech} className="card-img-top" alt="..."/>

      <div className="card-body">
        <h5 className="card-title">Electromechanical Works</h5>
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
          <h2 className="section-title">Our Projects</h2>
        </div>

        {/* <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".projects-prev",
            nextEl: ".projects-next",
          }}
          slidesPerView={3}
          centeredSlides
          loop
          spaceBetween={30}
          speed={1300}
          className="projectsSwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <img
                src={project}
                alt={`Project ${index + 1}`}
                className="project-img"
              />
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
        </div> */}
    

      <Swiper
  modules={[Navigation]}
  slidesPerView={3}
  centeredSlides
  loop
  spaceBetween={30}
  speed={1300}
  className="projectsSwiper"

  // onBeforeInit={(swiper) => {
  //   swiper.params.navigation.prevEl = prevRef.current;
  //   swiper.params.navigation.nextEl = nextRef.current;
  // }}
  navigation={{
    prevEl: ".projects-prev",
    nextEl: ".projects-next",
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
    <SwiperSlide key={index}>
  <div className="project-card">
  <img
    src={project.image}
    alt={project.title}
    className="project-img"
  />

  <div className="project-overlay">
 
    <span>{project.category}</span>

    <h3>{project.title}</h3>

 


  </div>
</div>
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
       
            <h2 className="section-contact-title">Ready to Start Your Next <span>Project ?</span></h2>
            <p>Get in touch with our expert team to discuss your project requirements 
              and discover how we can bring your vision to life.</p>
       
        </div>
        <div className="right-form">
  <form className="contact-form">

    <input
      type="text"
      placeholder="Full Name"
      required
    />

    <input
      type="email"
      placeholder="Email Address"
      required
      className='text-success-emphasis'
    />

    {/* <input
      type="tel"
      placeholder="Phone Number"
      required
    /> */}

    <select required>
      <option value="">Project Type</option>
      <option>Industrial</option>
      <option>Medical</option>
      <option>Educational</option>
      <option>Infrastructure</option>
      <option>Steel Structures</option>
      <option>Other</option>
    </select>

    <textarea
      rows="5"
      placeholder="Tell us about your project..."
      required
    ></textarea>

    <button type="submit" className="submit-btn">
      Send Message
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
