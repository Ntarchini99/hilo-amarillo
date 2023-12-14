import mask from '../../assets/img/mask.png'
import  '../HomePage/HomePage.css';


const HomePage = () => {
  return (
    <div id="Home" className="home-page">
      <section className="costura-creativa">
    <h1 className="text-costura">Costura Creativa</h1>
    <p className="p-costura">para toda la familia</p>

    <ul>
        <li>Productos personalizados</li>
        <li>Calidad artesanal</li>
        <li>Amor en cada creación</li>
    </ul>

    <p className="parrafo">¡Lo pedis, lo tenés!</p>

    <img src={mask} alt="" className='img-home' />
</section>
  </div>
  );
};

export default HomePage;