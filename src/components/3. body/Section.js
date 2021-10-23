import React from "react";
import "../../sass/3. body/_section.scss";
import SectionImage1 from "../../assets/illustrations/illustration-stay-productive.png";
import Arrow from "../../assets/icons/icon-arrow.svg";

function Section() {
  return (
    <div className="section">
      <img className="section__img" src={SectionImage1} alt="productivity" />
      <div className="section__content">
        <h2>Stay productive, wherever you are</h2>
        <p className="section__paragraph">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.{" "}
        </p>{" "}
        <p className="section__paragraph">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <div className="section__link">
          <a href="/">See how Fylo works</a>
          <img src={Arrow} alt="alt" />
        </div>
      </div>
    </div>
  );
}

export default Section;
