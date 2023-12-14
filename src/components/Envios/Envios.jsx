import React, { useEffect } from 'react';
import mapa from '../../assets/icons/mapa.png';
import entrega from '../../assets/icons/entrega.png';
import domicilio from '../../assets/icons/domicilio.png';
import '../Envios/Envios.css';

const Envios = () => {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('Envios');
      const sectionPosition = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionPosition < windowHeight / 2) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id='Envios' className="envios-section">
      <div className="envios-container">
        <h1 className="envios-title">MÉTODOS DE ENVÍO</h1>
        <h3 className="envios-subtitle">PARA TI</h3>
        <div className="card-container">
          <div className="card">
            <img src={mapa} alt="Icono de mapa" className="card-icon" />
            <p className="card-text">Punto de encuentro</p>
            <p className="small-text">Correo Andreani <br />[ martes y viernes ]</p>
          </div>
          <div className="card">
            <img src={entrega} alt="Icono de envío" className="card-icon" />
            <p className="card-text">Envío a todo el país</p>
            <p className="small-text">Correo Andreani <br />[ martes y viernes ]</p>
          </div>
          <div className="card">
            <img src={domicilio} alt="Icono de domicilio" className="card-icon" />
            <p className="card-text">Domicilio</p>
            <p className="small-text">[ miércoles - jueves - viernes ]</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Envios;