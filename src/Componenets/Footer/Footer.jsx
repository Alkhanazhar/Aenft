import React from "react";
import "./Footer.css";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer team">
      <div className="container">
        <div className="height45"></div>
        <h3 className="bold text-center">AENFT CLONE</h3>
        <div className="height20"></div>

        <p className="text-center">
          Copyright © 2022. All Rights Reserved by AENFT
        </p>
        <div className="height20"></div>
        <div className="social text-center">
          <BiLogoFacebook size={30} />
          <BiLogoTwitter size={30} className="mx-2" />
          <BiLogoWhatsapp size={30} className="mx-2" />
        </div>
    <div className="height20"></div>

      </div>
    </div>
  );
};

export default Footer;
