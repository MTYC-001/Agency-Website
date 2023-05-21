import React, { useState } from 'react';

const CircleWithText = ({ number }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  let hoverText = '';
  if (isHovered) {
    if (number === 1) {
      hoverText = 'BRAND LAUNCHES';
    } else if (number === 2) {
      hoverText = 'CHANNEL EXPANSION';
    }
    else if (number === 3) {
        hoverText = 'STRATEGY AND DEVELOPMENT';
      }
      else if (number === 4) {
        hoverText = 'ACQUISITION AND RETENTION';
      }
      else if (number === 5) {
        hoverText = 'CONVERSION RATE OPTIMIZATION';
      }
      else if (number === 6) {
        hoverText = 'REPOSITIONING';
      }
      else if (number === 7) {
        hoverText = 'STORY TELLING';
      }
    // Add more conditions for other circle numbers if needed
  }

  return (
    <div
      className={`circle ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`circle-content ${isHovered ? 'hovered-content' : ''}`}>
        {isHovered ? number : number}
      </div>
      {isHovered && (
        <div className="hover-text">
          {hoverText}
        </div>
      )}
    </div>
  );
};

const Work = () => {
  return (
    <div className="circle-container">
      <h1 className='title'>What We Do</h1>
      <CircleWithText number={1} />
      <CircleWithText number={2} />
      <CircleWithText number={3} />
      <CircleWithText number={4} />
      <CircleWithText number={5} />
      <CircleWithText number={6} />
      <CircleWithText number={7} />
      {/* Add more CircleWithText components for other numbers */}
    </div>
  );
};

export default Work;
