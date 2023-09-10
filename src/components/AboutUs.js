import "./HeroStyles.css";
import images1 from "../assets/12.jpg";
import images2 from "../assets/6.jpg";
import images3 from "../assets/13.jpg";
import images4 from "../assets/4.jpg";
import images5 from "../assets/21.jpg";
import images6 from "../assets/22.jpg";
import images7 from "../assets/23.jpg";
import images8 from "../assets/24.jpg";
import images9 from "../assets/9.jpg";
import images10 from "../assets/26.jpg";
import images11 from "../assets/27.jpg";
import images12 from "../assets/28.jpg";
function AboutUs() {
  return (
    <div className="Aboutpage">
      <div className="title">
        <h1>About Us</h1>
      </div>
      <div className="history">
        <div className="text">
          <h1>Our History</h1>
          <p>
            Our travel website was founded in 2023 with a mission to inspire and
            enable travelers to explore the world. We recognized the growing
            desire among individuals to experience new cultures, breathtaking
            landscapes, and unique adventures. With a deep passion for travel
            ourselves, we embarked on a journey to create a platform that would
            connect wanderlust-filled souls with unforgettable destinations.
          </p>
        </div>
        <div className=" aboutimages">
          <img alt="image_loading" src={images1} />
          <img alt="image_loading" src={images2} />
          <img alt="image_loading" src={images3} />
          <img alt="image_loading" src={images4} />
        </div>
      </div>

      <div className="mission">
        <div className="text">
          <h1>Our Mission</h1>
          <p>
            Our mission is to be your trusted companion in your travel
            endeavors. We strive to curate the most comprehensive and up-to-date
            travel information, providing you with valuable insights and
            resources to plan your perfect trip. Our team of travel enthusiasts
            works tirelessly to research and present you with the most
            captivating destinations, hidden gems, and insider tips. We are
            committed to promoting sustainable and responsible travel practices.
            Through our platform, we aim to raise awareness about the
            environmental, cultural, and social impacts of tourism. By
            partnering with local communities and advocating for ethical
            tourism, we aspire to contribute to the preservation of the world's
            natural and cultural heritage for future generations.
          </p>
        </div>
        <div className=" aboutimages">
          <img alt="image_loading" src={images5} />
          <img alt="image_loading" src={images6} />
          <img alt="image_loading" src={images7} />
          <img alt="image_loading" src={images8} />
        </div>
      </div>
      <div className="vision">
        <div className="text">
          <h1>Our &nbsp; Vision</h1>
          <p>
            At our travel website, our vision is to inspire a global community
            of explorers who embrace the transformative power of travel. We
            believe that travel has the potential to broaden horizons, foster
            understanding, and create connections that transcend borders. Our
            vision extends beyond mere tourism, as we strive to facilitate
            immersive and authentic experiences that encourage meaningful
            interactions with local communities and promote cultural exchange.
            We envision a world where travel is not just a fleeting escape but a
            transformative journey that ignites curiosity, empathy, and personal
            growth. By providing a platform that combines practical travel
            information with inspiring stories, breathtaking imagery, and
            engaging resources, we aim to empower individuals to embark on
            life-changing adventures and make lasting memories. Join us on this
            extraordinary voyage as we continue to evolve, innovate, and
            inspire. Let our travel website be your trusted companion, guiding
            you through uncharted territories and helping you unlock the wonders
            of the world.
          </p>
        </div>
        <div className=" aboutimages">
          <img alt="image_loading" src={images9} />
          <img alt="image_loading" src={images10} />
          <img alt="image_loading" src={images11} />
          <img alt="image_loading" src={images12} />
        </div>
      </div>
      <h3>Welcome to our travel community!</h3>
      <h3>
        The Team at <b>www.Tourer.com</b>
      </h3>
    </div>
  );
}
export default AboutUs;
