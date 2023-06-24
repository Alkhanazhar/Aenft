import React from "react";
import "./Navbar.css";
import { BsSun, BsWallet } from "react-icons/bs";

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-in">
          <div className="left">
            <h2 className="left">Logo</h2>
          </div>
          <div className="center">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Roadmap</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="right">
            <button className="btn btn" >
              <BsSun size={26} />
            </button>
            <button className="btn btn-primary ms-2" style={{padding:".6rem .8rem",borderRadius:".4rem"}}>
              <BsWallet className="mx-2" />
              Connect
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
