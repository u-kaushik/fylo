import React from "react";
import Logo from "../../assets/icons/logo.svg";
import Location from "../../assets/icons/icon-location.svg";
import Phone from "../../assets/icons/icon-phone.svg";
import Email from "../../assets/icons/icon-email.svg";
import "../../sass/5. Footer/_footer.scss";
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Instagram from "../../assets/icons/instagram.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={Logo} alt="Fylo logo" />
      </div>

      <div className="footer__menus">
        <div className="footer__menu part-1">
          <div className="footer__menu--contact location">
            <img src={Location} alt="location" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="footer__menu--contact contact">
            <div className="footer__menu--contact">
              <img src={Phone} alt="phone" />
              <p>+1-543-123-4567</p>
            </div>
            <div className="footer__menu--contact">
              <img src={Email} alt="e-mail" />
              <p>example@fylo.com</p>
            </div>
          </div>
        </div>

        <div className="footer__menu part-2">
          <div className="footer__menu--links">
            <ul>
              <li>About Us</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer__menu--links">
            <ul>
              <li>Contact Us</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="footer__menu--links social-icons">
            <ul>
              <li>
                <img src={Facebook} alt="Facebook" />
              </li>
              <li>
                <img src={Twitter} alt="Twitter" />
              </li>
              <li>
                <img src={Instagram} alt="Instagram" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
