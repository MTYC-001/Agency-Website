import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';

const BrandingSlide = () => {
  const [spinDirection, setSpinDirection] = useState('');

  useEffect(() => {
    const randomDirection = Math.random() < 0.5 ? 'normal' : 'reverse';
    setSpinDirection(randomDirection);
  }, []);

  return (
    <div className="branding-slide">
      <div className={`ovalX ${spinDirection}`}></div>
      <div className={`ovalY ${spinDirection}`}></div>
      <Carousel />
    </div>
  );
};

export default BrandingSlide;
