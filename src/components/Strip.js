import "./HeroStyles.css";
function Strip() {
  return (
    <div className="strip">
      <div className="strip-nav">
        <ul>
          <a href="/">
            <li>Tours</li>
          </a>
          <a href="/">
            <li>Hotels</li>
          </a>
          <a href="/">
            <li>Flights</li>
          </a>
          <a href="/">
            <li>Vehicles</li>
          </a>
          <a href="/">
            <li>Cruise</li>
          </a>
        </ul>
      </div>
      <div className="strip-details">
        <ul>
          <a href="/">
            <li>
              Destination
              <i class="fa-solid fa-location-dot"></i>
            </li>
          </a>
          <a href="/">
            <li>
              Start Date
              <i class="fa-solid fa-calendar-days"></i>
            </li>
          </a>
          <a href="/">
            <li>
              End Date
              <i class="fa-solid fa-calendar-days"></i>
            </li>
          </a>
          <a href="/">
            <li>
              Price
              <i class="fa-solid fa-sack-dollar"></i>
            </li>
          </a>
          <a href="/">
            <li>
              <button>Book Now</button>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
export default Strip;
