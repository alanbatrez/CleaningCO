import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../assets/logo.png"
import "./navbar.css"

function Navbar() {
  const navRef = useRef(null);

  useGSAP(() => {
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
      delay: 0.2
    });
  }, { scope: navRef });

  return (
    <nav className="" ref={navRef}>
        <div className="container-">
            <div className="img-container">
                <img src={logo} alt="Company" />
            </div>
            <div className="links">
                <span ><a className="link" href="#">Home</a></span>
                <span><a  className="link" href="#">Services</a></span>
                <span><a  className="link" href="#">FAQ</a></span>
                <span className=""><a className="btn" href="#">BOOK NOW</a></span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar