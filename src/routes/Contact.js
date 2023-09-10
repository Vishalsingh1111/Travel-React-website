import Navbar from "../components/Navbar";
import ContactImg from "../assets/10.jpg";
import Footer from "../components/Footer";
import "../components/HeroStyles.css";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="aboutimage">
        <img alt="loading_image" src={ContactImg} />
      </div>
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
