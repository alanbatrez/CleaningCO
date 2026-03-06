import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./services.css";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
    { id: '01', title: 'RESIDENTIAL CLEANING', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop' },
    { id: '02', title: 'COMMERCIAL CLEANING', img: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800&auto=format&fit=crop' },
    { id: '03', title: 'POST CONSTRUCTION CLEANING', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop' },
    { id: '04', title: 'CARPETS & UPHOLSTERY', img: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop' },
    { id: '05', title: 'PRESSURE CLEANING', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop' },
    { id: '06', title: 'ADD-ON & SPECIALTY REQUESTS', img: 'https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?q=80&w=800&auto=format&fit=crop' },
];

function Services (){
    const container = useRef(null);

    useGSAP(() => {
        gsap.from(".hero-title, .hero-text, .p-border-wrapper", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            y: 30,
            opacity: 0,
            duration: 0.9,
            stagger: 0.3,
            ease: "power2.out",
        });

        gsap.from(".card-wrapper", {
            scrollTrigger: {
                trigger: ".gallery",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            y: 50,
            opacity: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power2.out",
        });
    }, { scope: container });

    return (
        <section className="services" ref={container}>
            <div className="p-border-wrapper">
                <p className="p-border">Everyday Cleaning Reimagined</p>
            </div>
            <h1 className="hero-title">Everything Clean, Everything Easy.</h1>
            <p className="hero-text">We provide cleaning with care and attention. Find the service that fits your space.</p>
            <div className="gallery">
                {servicesData.map((service, index) => (
                    <div className="card-wrapper" key={index} style={{ height: "100%" }}>
                        <div className="card" style={{ height: "100%" }}>
                            <img src={service.img} alt={service.title} className="card-image" />
                            <div className="card-info">
                                <div className="card-number">{service.id}</div>
                                <div className="card-title">{service.title}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services;