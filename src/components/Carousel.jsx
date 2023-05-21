import React, { useEffect, useRef } from "react";


const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carouselElement = carouselRef.current;
    const sentenceElement = carouselElement.querySelector(".sentence");
    const carouselWidth = carouselElement.offsetWidth;
    const sentenceWidth = sentenceElement.offsetWidth;

    let position = carouselWidth;

    const animateCarousel = () => {
      position--;

      if (position < -sentenceWidth) {
        position = carouselWidth;
      }

      sentenceElement.style.transform = `translateX(${position}px)`;

      requestAnimationFrame(animateCarousel);
    };

    animateCarousel();
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="sentence">WE'RE BRANDS <br/> AND <br/> WE BELIEVE IN</div>
      <div className="sentence2">QUALITY <br/> OVER QUANTITY</div>
    </div>
  );
};

export default Carousel;
