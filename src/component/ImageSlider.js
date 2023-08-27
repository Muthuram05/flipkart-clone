import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  function prevSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }
  useEffect(() => {
    const interval = setInterval( nextSlide, 3000); // Auto-scroll every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <div onClick={nextSlide} id="next-btn">
        <svg
          width="5"
          height="8"
          viewBox="0 0 16 27"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
            fill="#000"
          ></path>
        </svg>
      </div>
      <div onClick={prevSlide} id="previous-btn">
        <svg
          width="5"
          height="8"
          viewBox="0 0 16 27"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
            fill="#000"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ImageSlider;
