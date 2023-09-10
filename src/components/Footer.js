import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Tourer</h1>
          <p>Your Trip Planner.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-youtube-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Community</h4>
          <a href="/">Our Teams</a>
          <a href="/">About</a>
          <a href="/">Queries</a>
          <a href="/">Join Us</a>
        </div>
        <div>
          <h4>Services</h4>
          <a href="/">India</a>
          <a href="/">International</a>
          <a href="/">New Offers</a>
          <a href="/">Trending</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">ChatBot</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Helps poor</a>
        </div>
      </div>
      <div className="lowermost">
        <p>
          © Copyright {" 2023"} Tourer
          <script type="text/javascript">
            document. write(new Date(). getFullYear());
          </script>
        </p>
      </div>
    </div>
  );
};
export default Footer;
