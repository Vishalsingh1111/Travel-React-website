import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../assets/3.jpg";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import DistinationButton from "../components/DestinationButton";
import Strip from "../components/Strip";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <DistinationButton />
      <Trip />
      <Strip />
      <Footer />
    </>
  );
}
export default Home;
