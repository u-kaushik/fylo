import React from "react";
import "../../sass/4. CTA/_cta.scss";

function CTA() {
  return (
    <div className="cta__section">
      <div className="cta">
        <h2>Get early access today</h2>
        <p>
          {" "}
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.{" "}
        </p>
        <form>
          <input type="text" placeholder="email@example.com" />
          <button className="button" type="submit">
            <h4>Get Started For Free</h4>
          </button>
        </form>
      </div>
    </div>
  );
}

export default CTA;
