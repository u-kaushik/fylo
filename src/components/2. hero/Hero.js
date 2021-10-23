import React from "react";
import IntroImg from "../../assets/illustrations/illustration-intro.png";
import "../../sass/2. hero/_hero.scss";

function Hero() {
  return (
    <div className="hero">
      <img className="hero__img" src={IntroImg} alt="hero-illustration" />
      <h1>All your files in one secure location, accessible anywhere.</h1>
      <p>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button className="button">
        <h4>Get Started</h4>
      </button>
    </div>
  );
}

export default Hero;
