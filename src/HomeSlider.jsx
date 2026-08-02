import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import slider1 from "./assets/slider1.png";
import slider2 from "./assets/slider2.png";
import slider3 from "./assets/slider3.png";
import slider4 from "./assets/slider4.png";

import { useTranslation } from "react-i18next";

export default function HomeSlider() {

  const { t, i18n } = useTranslation();
    return (
        <div>
        <Swiper
        key={i18n.language}
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
        className="heroSwiper"
      >

        <SwiperSlide>
          <div className="slide">
            <img src={slider1} alt="" />
            <div className="overlay"></div>
  
            <div className="content">
            <h1>{t("slider.slide1.title")}</h1>

<p>{t("slider.slide1.description")}</p>
            </div>
          </div>
        </SwiperSlide>
  
        <SwiperSlide>
          <div className="slide">
            <img src={slider2} alt="" />
            <div className="overlay"></div>
  
            <div className="content">
            <h1>{t("slider.slide2.title")}</h1>

<p>{t("slider.slide2.description")}</p>
            </div>
          </div>
        </SwiperSlide>
  
        <SwiperSlide>
          <div className="slide">
            <img src={slider3} alt="" />
            <div className="overlay"></div>
  
            <div className="content">
            <h1>{t("slider.slide3.title")}</h1>

<p>{t("slider.slide3.description")}</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src={slider4} alt="" />
            <div className="overlay"></div>
  
            <div className="content">
            <h1>{t("slider.slide4.title")}</h1>

<p>{t("slider.slide4.description")}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    
    );
  }