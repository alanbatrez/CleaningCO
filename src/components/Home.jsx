import Navbar from "./Navbar";
import "./home.css";
import banner from "../assets/banner.png";

function Home() {
  return (
    <>
      <Navbar />

      <div className="hero-container">
        <img className="bg-img" src={banner} alt="Banner" />
        <div className="overlay"></div>

        <div className="hero-content">
          <div className="hero-inner">
            <h1 className="hero-title">Book in minutes.</h1>
            <p className="hero-text">
              Professional cleaning and services with a simple booking experience.
              Choose a time, confirm, and you are set.
            </p>

            <div className="hero-actions">
              <a className="hero-btn " href="#">
                BOOK NOW
              </a>
              <a className="hero-btn hero-btn--secondary" href="#">
                VIEW SERVICES
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;