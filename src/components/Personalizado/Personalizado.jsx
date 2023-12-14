import React, { useEffect } from 'react';
import uno from '../../assets/img/foto-uno.png';
import dos from '../../assets/img/foto-dos.png';
import '../Personalizado/Personalizado.css';

const Personalizado = () => {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('Personalizado');
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
    <div id="Personalizado" className="Personalizado">
      <div className='personalizado-text'>
        <h1><strong>Personalizalo</strong><br />a tu manera</h1>
        <h2><strong>Personalizalo a tu manera </strong></h2>
        <p>¿Querés ponerle tu sello personal a nuestros productos?
          <br />¡Contanos de qué se trata y te lo cotizamos! Te damos la opción de elegir <br />entre una variedad de colores, talles y hasta crear nuevos modelos</p>
      </div>
      <div className="personalizado-cuatro">
        <h4><strong>En Hilo Amarillo, lo que pedís, ¡lo tenés!</strong></h4>
      </div>

      <img className='dos' src={dos} alt="Imagen Dos" />
      <img className='uno' src={uno} alt="Imagen Uno" />
    </div>
  );
};

export default Personalizado;