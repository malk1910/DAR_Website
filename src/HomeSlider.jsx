import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/autoplay";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import slider1 from "./assets/slider1.jpeg";
import slider2 from "./assets/slider2.jpeg";
import slider3 from "./assets/slider3.jpeg";
import slider4 from "./assets/slider4.jpeg";

export default function HomeSlider() {
    return (
        <div>
        <Swiper
        modules={[
          Navigation,
          Pagination,
          Autoplay,
          EffectFade,
        ]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={2500}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        // breakpoints={{
        //     0: {
        //       navigation: 0,   
        //     }
        //   }}
        className="heroSwiper"
      >

        <SwiperSlide>
          <div className="slide">
            <img src={slider1} alt="" />
            <div className="overlay"></div>
  
            <div className="content">
              <h1>Building Trust Through Excellence</h1>
              <p>
              DAR delivers high-quality construction projects that meet client expectations within budget and time, while maintaining the highest professional standards of quality and reliability.
              </p>
            </div>
          </div>
        </SwiperSlide>
  
        <SwiperSlide>
          <div className="slide">
            <img src={slider2} alt="" />
            <div className="overlay"></div>
  
            <div className="content">
              <h1>Innovative Engineering Solutions</h1>
              <p>
              We transform ideas into reality through innovative and sustainable construction solutions across industrial, medical, and infrastructure projects.
              </p>
            </div>
          </div>
        </SwiperSlide>
  
        <SwiperSlide>
          <div className="slide">
            <img src={slider3} alt="" />
            <div className="overlay"></div>
  
            <div className="content">
              <h1>Shaping Sustainable Futures</h1>
              <p>
              At DAR, sustainability is at the core of every project, ensuring long-lasting value and positive impact on communities and future generations.              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src={slider4} alt="" />
            <div className="overlay"></div>
  
            <div className="content">
              <h1>From Vision to Reality</h1>
              <p>
              With a dedicated team and strong technical expertise, we manage and execute complex projects that turn visions into successful, real-world achievements.              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    
    );
  }