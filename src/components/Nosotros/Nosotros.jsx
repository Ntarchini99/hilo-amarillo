import React, { useEffect } from 'react';
import NosotrosImage from '../../assets/img/foto1.png';
import '../Nosotros/Nosotros.css';

const Nosotros = () => {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('Nosotros');
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
    <div id="Nosotros" className="Nosotros">
      <div className='container-textt'>
        <h1>NOSOTRAS</h1>
        <h2>¡HOLA!</h2>
        <p>Somos Laura y Sheila y estamos detrás del increíble proyecto artesanal, Hilo Amarillo. Somos un dúo creativo que ama trabajar con nuestras manitas y crear recuerdos inolvidables. En nuestro negocio, cada pieza es única y personalizada con mucho amor y dedicación.
        Si estás buscando ese regalo auténtico y especial, ¡estás en el lugar correcto! 
        Echa un vistazo a nuestros productos y descubrí todo lo que ofrecemos.</p>
      </div>
      <div className='img-nosotros'>
        <img src={NosotrosImage} alt="Nosotros Imagen" />
      </div>
    </div>
  );
};

export default Nosotros;