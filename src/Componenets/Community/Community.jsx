import React from "react";
import "./Community.css";

const Community = () => {
  return (
    <div className="team">
      <div className="container">
        <div className="height50"></div>
        <div className="community-card">
          <h2>
            Join our community for <br />
            First Access
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the <br />
            majority have suffered alteration in some form.
          </p>
          <div className="height30"></div>
          <div className="button text-center">
            <button className="btn btn button1">Join Our Community</button>
            <button className="btn btn button2">Join The Waitlist</button>
          </div>
        </div>
      </div>
        <div className="height50"></div>
    </div>
  );
};

export default Community;
