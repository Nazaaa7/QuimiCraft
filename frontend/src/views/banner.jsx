import React from 'react';
import './css/banner.css';
import myImage from "../assets/img/reaccion.png"// Ajusta la ruta según tu estructura de carpetas

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <h2>Get Free Education</h2>
        <p>Get free education and high-quality educational systems to help you advance in your field.</p>
        <button className="learn-more">Learn More</button>
      </div>
      <div className="banner-image">
      <img src={myImage} alt="Description of image" />
      </div>
    </div>
  );
}

export default Banner;
