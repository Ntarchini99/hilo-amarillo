import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Oimg1 from "../../assets/img/Otros/bolsas.png";
import Oimg2 from "../../assets/img/Otros/cartuchera1.png";
import Oimg3 from "../../assets/img/Otros/cartuchera2.png";
import Oimg4 from "../../assets/img/Otros/neceser.png";
import Oimg5 from "../../assets/img/Otros/pizarra.png";
import Oimg6 from "../../assets/img/Otros/pizarra2.png";
import Oimg7 from "../../assets/img/Otros/pizarra3.png";
import Oimg8 from "../../assets/img/Otros/neceser2.png";
import Oimg9 from "../../assets/img/Otros/neceser3.png";
import Oimg10 from "../../assets/img/Otros/neceser4.png";
import Oimg11 from "../../assets/img/Otros/bata.png";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./sliderOther.css";

import { Navigation } from "swiper/modules";

const slidesOthers = [
  {
    image: Oimg1,
    title: "Bolsa de tela",
    description: "Goma Personalizada",
  },
  {
    image: Oimg9,
    title: "Neceser",
    description: "Variedad de estampados",
  },
  {
    image: Oimg2,
    title: "Cartu Taylor",
    description: "Variedad de estampados",
  },
  {
    image: Oimg7,
    title: "Pizarra Enro",
    description: "Variedad de colores",
  },
  {
    image: Oimg3,
    title: "Cartuchera",
    description: "Variedad de estampados",
  },
  {
    image: Oimg4,
    title: "Neceser/Cartu",
    description: "Variedad de estampados",
  },
 
  {
    image: Oimg6,
    title: "Pizarra Enro",
    description: "Variedad de colores",
  },
  {
    image: Oimg8,
    title: "Neceser",
    description: "Variedad de estampados",
  },
  {
    image: Oimg11,
    title: "Bata HP",
    description: "Variedad de estampados",
  },
 
  
  {
    image: Oimg10,
    title: "Neceser",
    description: "Variedad de estampados",
  },
 
  {
    image: Oimg5,
    title: "Pizarra Enro",
    description: "Variedad de colores",
  },
 
];

export default function sliderOther() {
  return (
    <>
      <div className="containerOther">
        <h1 className="titleOther">Más diseños</h1>
        <div className="containerSliderOther">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={35}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-other",
              prevEl: ".swiper-button-prev-other",
              clickable: true,
            }}
            modules={[Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              450: {
                slidesPerView: 2,
              },

              768: {
                slidesPerView: 3,
              },

              1024: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            className="sliderOther"
          >
            {slidesOthers.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="contentSliderOthers">
                  <img src={slide.image} />
                  <div>
                    <h2>{slide.title}</h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="slider-controler-other">
            <div className="swiper-button-prev-other slider-arrow">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next-other slider-arrow">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </>
  );
}