import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="banner banner-pad-1 bg_img">
      <div className="container">
        <div className="banner-content">
          <div className="banner-title">Haristec Agro</div>
          <div className="banner-desc">
          Haristec Agro is a multi-disciplinary consultancy specialising in environment, agriculture and communities
          </div>
          <Link to="/about" className="lab-btn">
            <span>Discover Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
