import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../assets/logo.png";
import "./navbar.css";

function Navbar() {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(
    () => {
      // Animate the logo sliding down from the top
      gsap.from(".img-container", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // Animate the navigation links staggering in
      gsap.from(".links span", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2,
      });
    },
    { scope: navRef },
  );

  return (
    <nav className="navbar" ref={navRef}>
      <div className="container-">
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className="img-container desktop-logo">
          <img src={logo} alt="Company" />
        </div>

        <div className={`links ${isOpen ? "open" : ""}`}>
          <div className="img-container mobile-logo">
            <img src={logo} alt="Company" />
          </div>
          <span>
            <a className="link" href="#" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </span>
          <span>
            <a className="link" href="#" onClick={() => setIsOpen(false)}>
              Services
            </a>
          </span>
          <span>
            <a className="link" href="#" onClick={() => setIsOpen(false)}>
              FAQ
            </a>
          </span>
          <span className="">
            <a className="btn" href="#" onClick={() => setIsOpen(false)}>
              BOOK NOW
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
