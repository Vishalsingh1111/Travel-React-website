import "./TripStyles.css";
import "./HeroStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/7.jpg";
import Trip2 from "../assets/19.jpg";
import Trip3 from "../assets/18.jpg";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Maldives"
          text=" On this once-in-a-lifetime vacation, fill your days with beach trips, spa treatments and snorkeling or scuba diving excursions. If cabin fever sets in, pay a visit to the capital, Malé, where you'll find historic mosques and open-air markets."
        />
        <TripData
          image={Trip2}
          heading="London, England"
          text=" If it's your first time in London, join a tour that takes you past top spots like the Tate Modern art institution, Buckingham Palace, the Tower of London, Borough Market and the British Museum, before sitting down to a classic afternoon tea or checking out a local pub for a Sunday roast."
        />
        <TripData
          image={Trip3}
          heading="Paris"
          text=" France's magnetic City of Light is a perennial tourist destination, drawing visitors with its iconic attractions, like the Eiffel Tower and the Louvre, and its unmistakable je ne sais quoi. Quaint cafes, trendy shopping districts and Haussmann architecture give Paris its timeless beauty."
        />
      </div>
      <div className="distinationbutton">
        <a href="/service">
          <buttons>View All</buttons>
        </a>
      </div>
    </div>
  );
}
export default Trip;
