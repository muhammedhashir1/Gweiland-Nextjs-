"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Banner.module.css";

const slides = [
  { src: "/assets/slide1.svg", title: "Heritage Hoodies" },
  {
    src: "/assets/slide2.svg",
    title: "Premium Zip Hoodies",
  },
  {
    src: "/assets/slide3.svg",
    title: "Premium Tees",
  },
  {
    src: "/assets/slide4.svg",
    title: "Heritage Women's Tank",
  },
  {
    src: "/assets/slide5.svg",
    title: "Heritage Tees",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className={styles.banner_container}>
      <div className={styles.carousel}>
        {slides.map((slide, index) => (
          <div key={index} className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}>
            <Image src={slide.src} alt={`Slide ${index + 1}`} width={1920} height={1080} />
            <div className={styles.textContainer}>
              <h2 className={styles.title}>{slide.title}</h2>
              <button>Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
