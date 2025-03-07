import barberlogo from "../../assets/barberlogo.png";
import Carousel from "../../shared/components/Carousel";
import instagramLogo from "../../assets/instagram.png"; // Asegúrate de que la ruta sea correcta
import mapImg from '../../assets/map.png';
import "./Home.css"


export const LandingPage = () => {

  return (
    <>
      <h1 className="presentacion">Soy Jose Moya, barbero comprometido con ofrecer cortes de pelo de calidad.</h1>

      <div className="imagenes">
        <img src={instagramLogo} alt="LogoIG" />
        <h3 className="image-text">xhin9._</h3>
        <img src={mapImg} alt="LogoMap" />
        <h3 className="image-text">Covadonga 433 lo prado</h3>
      </div>

      <Carousel />

      <div className="button-container">
        <button className="button"> Agenda tu hora</button>
      </div>
    </>
  )
}
