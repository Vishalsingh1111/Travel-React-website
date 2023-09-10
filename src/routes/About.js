import Navbar from "../components/Navbar";
import AboutImg from "../assets/29.jpg";
import Footer from "../components/Footer";
import "../components/HeroStyles.css";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <div className="aboutimage">
        <img alt="loading_image" src={AboutImg} />
      </div>
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;
