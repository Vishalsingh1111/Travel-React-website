import "./DestinationStyles.css";
import Picture1 from "../assets/13.jpg";
import Picture2 from "../assets/14.jpg";
import Picture3 from "../assets/15.jpg";
import Picture4 from "../assets/16.jpg";
import Picture5 from "../assets/6.jpg";
import Picture6 from "../assets/17.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      <DestinationData
        className="first-des"
        heading="Manali, India"
        text="Situated in the Kullu Valley of Himachal Pradesh, Manali draws tourists 
        with its natural beauty and tranquillity.Snow-capped mountains, dense forests, 
        riverine valleys and sparkling streams add to the beauty of the hill station 
        and make it one of the most popular holiday destinations in India."
        time="Best Time to Visit: October to June."
        stay="Ideal Duration: 3-4 days."
        place="Best Places to Visit in Manali: Manu Temple, Hidimba Devi Temple, Museum of Himachal Culture and Folk Art, Jogini Falls, Himalayan Nyinmapa Tibetan Buddhist Temple, Nehru Kund, Mall Road."
        todo="Things to Do in Manali: Paragliding, parachuting and horse riding at Solang Valley, mountain biking, skiing and sledge riding at Rohtang Pass, trekking, river rafting, ziplining, zorbing."
        img1={Picture1}
        img2={Picture2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Shillong"
        text="Known for pleasant weather conditions and picturesque locations, Shillong in Meghalaya is one of the most cliched yet highly frequented tourist destinations in India."
        time="Best Time to Visit: September to May."
        stay="Ideal Duration: 4-5 days."
        place="Best Places to Visit in Shillong: Umiam Lake, Elephant Waterfalls, Shillong Peak, Cathedral of Mary Help of Christians, Police Bazaar, Don Bosco Museum, Sweet Falls, Phan Nonglait Park, Spread Eagle Falls, Lady Hydari Park, Sohpetbneng."
        todo="Things to Do in Shillong: Picnicking, shopping, trekking, cliff jumping, zip-lining, river rafting."
        img1={Picture3}
        img2={Picture4}
      />
      <DestinationData
        className="first-des"
        heading="Rajasthan"
        text="The land of kings, Rajasthan is a vibrant state that attracts history buffs, architecture lovers, wildlife enthusiasts and foodies alike.From beautiful lakes, vast deserts and rich wildlife to magnificent palaces, forts and temples.beautiful villages showcasing rich Rajasthani culture and traditions. "
        time="Best Time to Visit: November to February."
        stay="Ideal Duration: 6-7 days."
        place="Best Places to Visit in Rajasthan: Jaipur, Udaipur, Jaisalmer, Jodhpur, Bikaner, Mount Abu, Chittorgarh, Ranthambore National Park, Sariska Tiger Reserve, Keoladeo National Park."
        todo="Things to Do in Rajasthan: Exploring forts and palaces, paying respect at temples, enjoying folk dance and music festivals like Bikaner Camel Festival, Pushkar Fair, Gangaur Festival, Elephant Festival and Teej, visiting wildlife parks, gorging on delectable Rajasthani dishes, shopping."
        img1={Picture5}
        img2={Picture6}
      />
    </div>
  );
};
export default Destination;
