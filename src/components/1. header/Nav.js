import React from "react";
import "../../sass/1. header/_nav.scss";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__option">
        <a href="#features">Features</a>
      </div>
      <div className="nav__option">
        <a href="#team">Team</a>
      </div>
      <div className="nav__option">
        <a href="#login">Sign In</a>
      </div>
    </div>
  );
}

export default Nav;
