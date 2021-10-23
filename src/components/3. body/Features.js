import React from "react";
import FeatureImage1 from "../../assets/icons/icon-access-anywhere.svg";
import FeatureImage2 from "../../assets/icons/icon-security.svg";
import FeatureImage3 from "../../assets/icons/icon-collaboration.svg";
import FeatureImage4 from "../../assets/icons/icon-any-file.svg";
import "../../sass/3. body/_features.scss";

function Features() {
  return (
    <div className="features__primary">
      <div className="feature">
        <img src={FeatureImage1} alt="access" />
        <h2>Access your files, anywhere</h2>
        <p>
          The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you everywhere.
        </p>
      </div>
      <div className="feature">
        <img src={FeatureImage2} alt="security" />
        <h2>Security you can trust</h2>
        <p>
          2-factor authentication and user-controlled encryption are just a
          couple of the security features we allow to help secure your files.
        </p>
      </div>
      <div className="feature">
        <img src={FeatureImage3} alt="collaboration" />
        <h2>Real-time collaboration</h2>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
      </div>
      <div className="feature">
        <img src={FeatureImage4} alt="storage" />
        <h2>Store any type of file</h2>
        <p>
          Whether you're sharing holidays photos or work documents, Fylo has you
          covered allowing for all file types to be securely stored and shared.
        </p>
      </div>
    </div>
  );
}

export default Features;
