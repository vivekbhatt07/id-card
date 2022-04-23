import React from "react";
import Email from "../Assets/Mail.svg";
import Linkedin from "../Assets/linkedin.svg";

export default function Link() {
  return (
    <div className="link">
      <button className="link__btn">
        <div className="link__content">
          <img className="link__img" src={Email} alt="mail" />
          <span className="link__text">Email</span>
        </div>
      </button>
      <button className="link__btn link__btn--active">
        <div className="link__content">
          <img className="link__img" src={Linkedin} alt="linkedin" />
          <span className="link__text">LinkedIn</span>
        </div>
      </button>
    </div>
  );
}
