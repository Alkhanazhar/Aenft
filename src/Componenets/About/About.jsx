import React from "react";
import "./About.css";
import about from "./about.svg";

const About = () => {
  return (
    <div className="about">
      <div className="height70"></div>

      <div className="container">
        <div className="about-in">
          <div className="left">
            <h3 className="story">our story</h3>
            <h2 className="about-us">About us</h2>
            <p className="">
              As of January 2012, there were more than 21,000 ERC20 token
              contracts. We Built this Template because Ethereum ECO system is
              the most popular Platform. Among the most successful ERC20 token
              sales are EOS, Bancor, Qash and Bankex raising over $70 Million
              each.
            </p>
            <p className="">
              As of January 2012, there were more than 21,000 ERC20 token
              contracts. We Built this Template because Ethereum ECO system is
              the most popular Platform. Among the most successful ERC20 token
              sales are EOS, Bancor, Qash and Bankex raising over $70 Million
              each.
            </p>
          </div>
          <div className="right">
            <img src={about} alt="" />
          </div>
        </div>
        
      <div className="height"></div>
      <div className="d-flex">
      <button className="btn btn-primary px-3">Connect</button>
      <button className="btn btn-outline-primary ms-3 px-3">Whitelist Now</button>
      </div>
      <div className="height100"></div>

      </div>
    </div>
  );
};

export default About;
