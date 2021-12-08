import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Twilio Tech Titans</h1>

    <p className="lead">
      loren ipsum This application uses AuthO to access our Todo app. <a href="">OUR GITHUB LINK</a>
    </p>
  </div>
);

export default Hero;
