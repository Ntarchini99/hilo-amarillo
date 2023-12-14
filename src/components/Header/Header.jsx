import React, { useEffect, useState } from 'react';
import logonav from '../../assets/img/logo-navbar.png';
import menu from '../../assets/icons/menu.png';
import '../Header/Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    const sections = ['Home', 'Nosotros', 'Personalizado', 'Envios'];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <nav>
        <input type="checkbox" name="" id="toggle" />
        <label htmlFor="toggle" className='l'>
          <img className="menuu" src={menu} alt="menu desplegable" />
        </label>
        <a href="#" className="logo">
          <img src={logonav} alt="logo" /> Hilo Amarillo
        </a>
        <div className="menu">
          <ul>
            <li>
              <a
                onClick={() => {
                  scrollToSection('Home');
                  setActiveSection('Home');
                }}
                className={activeSection === 'Home' ? 'active' : ''}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  scrollToSection('Nosotros');
                  setActiveSection('Nosotros');
                }}
                className={activeSection === 'Nosotros' ? 'active' : ''}
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  scrollToSection('productos');
                  setActiveSection('productos');
                }}
                className={activeSection === 'productos' ? 'active' : ''}
              >
                Productos
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  scrollToSection('Personalizado');
                  setActiveSection('Personalizado');
                }}
                className={activeSection === 'Personalizado' ? 'active' : ''}
              >
                Personalizado
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  scrollToSection('Envios');
                  setActiveSection('Envios');
                }}
                className={activeSection === 'Envios' ? 'active' : ''}
              >
                Envios
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  scrollToSection('contact');
                  setActiveSection('contact');
                }}
                className={activeSection === 'contact' ? 'active' : ''}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;