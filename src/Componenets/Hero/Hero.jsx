import React from "react";
import "./Hero.css";
import hero from "./hero.svg"
import hero2 from "./hero-coin.png"

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-in">
          <div className="left">
          <div className="height50"></div>

            <h2>0 / 725 Minted</h2>
            <div className="height10"></div>
            <h1 className="fonthead">Discover & Collect <br />NFT Artwork</h1>
          <div className="height50"></div>


          </div>
          <div className="right">
            <div><img src={hero} alt="" className="hero-img" width="100px"/ >
              <img src={hero2} alt="" className="spin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
