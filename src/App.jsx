import './App.css';
import SliderOther from './components/sliderOther/sliderOther'
import Contact from './components/contact/contact'
import HomePage from './components/HomePage/HomePage.jsx';
import Nosotros from './components/Nosotros/Nosotros.jsx';
import Personalizado from './components/Personalizado/Personalizado.jsx';
import Header from './components/Header/Header.jsx';
import Envios from './components/Envios/Envios.jsx';
import Footer from './components/Footer/Footer.jsx';
import CardsTalles from "./components/CardTalles/cardTarlles.jsx";
import ContainerSlider from "./components/sliderGender/containerSlider";


function App() {
  return (
    <>
    <Header/>
      <HomePage />
      <Nosotros/>
      <ContainerSlider/>
      <CardsTalles/>
      <SliderOther/>
      <Personalizado/>
      <Envios/>
      <Contact/>
    <Footer/>
    </>
  );
}

export default App;
