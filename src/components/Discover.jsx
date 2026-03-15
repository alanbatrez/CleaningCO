import "./discover.css";
import img1 from "../assets/Square-rk4vm6tg8ydozatyxv7cd04p08moxuuqrvn0guyvps.png";
import bar from "../assets/stars-bar.png";
import React from 'react';

function Discover() {
  return (
    <section className="discover">
      <div className="discover-wrapper">
        <div className="discover-content">
          <div className="discover-p-container">
            <p className="p-border">Discover Us</p>
          </div>
          <h1 className="hero-title">Experience the Magic Mop Effect.</h1>
          <p className="hero-text">
            It’s not one thing, but a way of working. Guided by care, intention,
            and the details that matter most across the North Shore.
          </p>
        </div>
      </div>

      <div className="details">
        <div className="img-detail-container">
            <img src={img1} alt="" />
        </div>
        <div className="bar">
            <img src={bar} alt="" />
        </div>
        <div className="text-info-container">
        <div className="text-info-1">
            <h3>North Shore Roots</h3>
            <p>Locally owned and serving North Vancouver & West Vancouver.</p>
        </div>
        <div className="text-info-2">
            <h3>Care in Every Sweep</h3>
            <p>Every service sparkles with attention to detail.</p>
        </div>
        <div className="text-info-3">
            <h3>Soft Touch, Big Impact</h3>
            <p>Eco-friendly products that are safe for your home and the planet.</p>
        </div>
        <div className="text-info-4">
            <h3>Behind the Mop</h3>
            <p>Professional equipment and careful techniques.</p>
        </div>
        <div className="text-info-5">
            <h3>Made to Fit</h3>
            <p>Flexible, customized cleaning plans.</p>
        </div>
        <div className="text-info-6">
            <h3>Growing Together</h3>
            <p>Continuously improving to make life easier.</p>
        </div>
      </div>
      </div>

    </section>
  );
}

export default Discover;
