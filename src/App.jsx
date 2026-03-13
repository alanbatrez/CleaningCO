import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import './App.css'
import Services from "./components/services"
import bannerBadge from './assets/banner-badge (1).png'
import Discover from "./components/Discover"

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [count, setCount] = useState(0)
  const badgeRef = useRef(null);

  useGSAP(() => {
    gsap.from(badgeRef.current, {
      scrollTrigger: {
        trigger: ".badge-container",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      scale: 0.3,
      rotation: -360,
      duration: 1.5,
      ease: "power2.out"
    });
  });

  return (
    <>
      <Navbar />
      <Home/>
      <div className="badge-container">
        <img ref={badgeRef} src={bannerBadge} alt="Banner Badge" className="banner-badge" />
      </div>
      <Services/>
      <Discover/>
    </>
  )
}

export default App
