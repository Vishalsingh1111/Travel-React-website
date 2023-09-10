import Navbar from "../components/Navbar";
import ServiceImg from "../assets/1.jpg";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import "../components/HeroStyles.css";

function Service() {
  return (
    <>
      <Navbar />
      <div className="aboutimage">
        <img alt="loading_image" src={ServiceImg} />
      </div>
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
