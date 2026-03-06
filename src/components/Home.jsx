import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "./Navbar";
import "./home.css";
import banner from "../assets/banner.png";

function Home() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".hero-inner > *", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.2
    });

    gsap.from(".bg-img", {
      scale: 1.1,
      duration: 2,
      ease: "power2.out"
    });
  }, { scope: container });

  return (
    <div ref={container}>
      <Navbar />

      <div className="hero-container">
        <img className="bg-img" src={banner} alt="Banner" />
        <div className="overlay"></div>

        <div className="hero-content">
          <div className="hero-inner">
            <div className="p-border-wrapper">
              <p className="p-border">Everyday Cleaning Reimagined</p>
            </div>
            <h1 className="hero-title">Fresh, Calm & Glowing.</h1>
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
    </div>
  );
}

export default Home;