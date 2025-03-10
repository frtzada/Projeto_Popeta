import React, { useState } from 'react';
import './hero.css';

const Hero = () => {
  const [buttonText, setButtonText] = useState('Learn More');

  const handleClick = () => {
    setButtonText('Thank You for Clicking!');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Welcome to Our Website</h2>
        <p>Explore the amazing features of our application!</p>
        <button className="btn" onClick={handleClick}>{buttonText}</button>
      </div>
    </section>
  );
};

export default Hero;
