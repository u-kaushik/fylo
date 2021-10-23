import React from "react";
import "../../sass/1. header/_header.scss";
import Nav from "./Nav";
import Logo from "../../assets/icons/logo.svg";

function Header() {
  return (
    <div className="header">
      <img className="logo__img" src={Logo} alt="Fylo logo" />
      <div className="menu">
        <div className="web-menu">
          <Nav />
        </div>
      </div>
    </div>
  );
}

export default Header;
