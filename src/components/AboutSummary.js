import tree from "../assets/img/tree.png"
import grainbag from "../assets/img/grainbag.png"
import { Link } from "react-router-dom";


const AboutSummary = () => {
  return (
    <section className="about-us bg_img_1 bg_img padding-tb">
      <div className="shape-about d-none d-xl-block">
        <img src={grainbag} alt="abs-thumb" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div
              className="about-thumb ml-about-thumb wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <img src={tree} alt="about-thumb" />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div
              className="section-header text-start wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <h3>Who We Are</h3>
              <p>
              Haristec Global Limited started in Sawonjo town, Ogun state in 2019. While we initially focused on helping farmers develop sustainable businesses, we have since built on that strong foundation to expand our services across the environment, industry and communities.
              </p>
            </div>
            <div className="section-wrapper">
              <div className="about-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="about-inner">
                  <div className="about-thumb">
                    <img src="assets/images/about/icon/01.jpg" alt="about" />
                  </div>
                  <div className="about-content">
                    
                      <h5>Our purpose</h5>
                    
                    <p>
                    Haristec Agro creates change for our clients and ourselves whilst having a positive impact on society and the environment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="about-item wow fadeInUp" data-wow-delay="0.5s">
                <div className="about-inner">
                  <div className="about-thumb">
                    <img src="assets/images/about/icon/02.jpg" alt="about" />
                  </div>
                  <div className="about-content">
                    
                      <h5>Our values</h5>
                    
                    <p>
                    We care for our employees and clients and pride ourselves on our integrity and willingness to be honest in our advice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-start wow fadeInUp" data-wow-delay="0.6s">
              <Link to="/services" className="lab-btn">
                <span>What We Do</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;
