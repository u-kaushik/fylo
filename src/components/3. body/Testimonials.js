import React from "react";
import Profile1 from "../../assets/testimonials/profile-1.jpg";
import Profile2 from "../../assets/testimonials/profile-2.jpg";
import Profile3 from "../../assets/testimonials/profile-3.jpg";
import "../../sass/3. body/_testimonials.scss";
import QuoteIcon from "../../assets/icons/bg-quotes.png";

function Testimonials() {
  return (
    <div className="testimonials">
      <img className="testimonial__icon" src={QuoteIcon} alt="quote" />
      <div className="testimonial">
        <p>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="testimonial__profile">
          <img src={Profile1} alt="Satish Patel" />
          <div className="testimonial__profile--info">
            <h3>Satish Patel</h3>
            <h5>CEO, Huddle</h5>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <p>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="testimonial__profile">
          <img src={Profile2} alt="Bruce McKenzie" />
          <div className="testimonial__profile--info">
            <h3>Bruce McKenzie</h3>
            <h5>CEO, Huddle</h5>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <p>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="testimonial__profile">
          <img src={Profile3} alt="Iva Boyd" />
          <div className="testimonial__profile--info">
            <h3>Iva Boyd</h3>
            <h5>CEO, Huddle</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
