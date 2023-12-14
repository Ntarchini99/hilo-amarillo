import React, { useEffect, useState } from 'react';
import Slider from './slider';
import Aimg1 from "../../assets/img/Adultos/01A.png";
import Aimg2 from "../../assets/img/Adultos/02A.png";
import Aimg3 from "../../assets/img/Adultos/03A.png";
import Aimg4 from "../../assets/img/Adultos/04A.png";
import Aimg5 from "../../assets/img/Adultos/05A.png";
import Aimg6 from "../../assets/img/Adultos/06A.png";
import Aimg7 from "../../assets/img/Adultos/07A.png";
import Aimg8 from "../../assets/img/Adultos/08A.png";
import Aimg9 from "../../assets/img/Adultos/09A.png";
import Aimg10 from "../../assets/img/Adultos/10A.png";
import Aimg11 from "../../assets/img/Adultos/11A.png";
import Aimg12 from "../../assets/img/Adultos/12A.png";
import Iimg1 from "../../assets/img/Infantil/01I.png";
import Iimg2 from "../../assets/img/Infantil/02I.png";
import Iimg3 from "../../assets/img/Infantil/03I.png";
import Iimg4 from "../../assets/img/Infantil/04I.png";
import Iimg5 from "../../assets/img/Infantil/05I.png";
import Iimg6 from "../../assets/img/Infantil/06I.png";
import Iimg7 from "../../assets/img/Infantil/07I.png";
import Iimg8 from "../../assets/img/Infantil/08I.png";
import Iimg9 from "../../assets/img/Infantil/09I.png";
import Iimg10 from "../../assets/img/Infantil/10I.png";
import Iimg11 from "../../assets/img/Infantil/11I.png";
import Iimg12 from "../../assets/img/Infantil/12I.png";
import "./slider.css";

const slidesInfantil = [
  {
    image: Iimg1,
    imageBack: Iimg2,
    title: "Pijama Cerdito",
    description: "Talla desde XS a XL",
  },
  {
    image: Iimg3,
    imageBack: Iimg4,
    title: "Pijama Osito",
    description: "Talla desde XS a XL",
  },
  {
    image: Iimg5,
    imageBack: Iimg6,
    title: "Pijama Stitch",
    description: "Talla desde XS a XL",
  },
  {
    image: Iimg7,
    imageBack: Iimg8,
    title: "Pijama Dinosaurio",
    description: "Talla desde XS a XL",
  },
  {
    image: Iimg9,
    imageBack: Iimg10,
    title: "Pijama Sonic",
    description: "Talla desde XS a XL",
  },
  {
    image: Iimg11,
    imageBack: Iimg12,
    title: "Pijama River/Boca",
    description: "Talla desde XS a XL",
  },
];

const slidesAdultos = [
  {
    image: Aimg2,
    imageBack: Aimg1,
    title: "Pijama Kuromi",
    description: "Talla desde XS a XL",
  },
  {
    image: Aimg4,
    imageBack: Aimg3,
    title: "Pijama Vaca",
    description: "Talla desde XS a XL",
  },
  {
    image: Aimg5,
    imageBack: Aimg6,
    title: "Pijama Charmander",
    description: "Talla desde XS a XL",
  },
  {
    image: Aimg8,
    imageBack: Aimg7,
    title: "Pijama Pikachu",
    description: "Talla desde XS a XL",
  },
  {
    image: Aimg9,
    imageBack: Aimg10,
    title: "Pijama Mario Bros.",
    description: "Talla desde XS a XL",
  },
  {
    image: Aimg11,
    imageBack: Aimg12,
    title: "Pijama Unicornio",
    description: "Talla desde XS a XL",
  },
];

const ContainerSlider = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('productos');
      const containerPosition = container.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;


      setIsScrollingDown(containerPosition < windowHeight / 2);


      if (isScrollingDown) {
        container.classList.add('visible');
      } else {
        container.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrollingDown]);

  return (
    <>
      <h1 className='titleProducts' id='productos'>Productos</h1>
      <Slider slides={slidesInfantil} gender="Infantil" />
      <Slider slides={slidesAdultos} gender="Adultos" />
    </>
  );
};

export default ContainerSlider;
