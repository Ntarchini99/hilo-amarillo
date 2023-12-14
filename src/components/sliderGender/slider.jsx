import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function Slider({ slides, gender }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <>
      <div className="containerSlider">
        <h2 className="titleSlider">{gender}</h2>
        <div className="containerSliderGender">
          <Swiper
            slidesPerView={"auto"}
            initialSlide={1}
            effect={"coverflow"}
            // grabCursor={true}
            speed={500}
            centeredSlides={true}
            centeredSlidesBounds={true}
            // keyboard= {{
            //  enabled: true
            // }}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: -35,
              depth: 80,
              modifier: 1.5,
              scale: 1,
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="sliderGender"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },

              1200: {
                slidesPerView: 3,
                spaceBetween: 90,
              },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className={`swiper-slide-custom ${
                  Swiper && Swiper.virtualIndex === index
                    ? "swiper-slide-active"
                    : ""
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  className="swiper-slide-image"
                  src={hoveredIndex === index ? slide.imageBack : slide.image}
                  alt={`Slide ${index + 1}`}
                />
                <div className="contentText">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </>
  );
}