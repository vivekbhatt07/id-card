import React from "react";

export default function Link() {
  return (
    <div className="link">
      <button className="link__btn">
        <img className="link__img" src="../Assets/Mail.svg" alt="mail" />
        <span className="link__text">Email</span>
      </button>
      <button className="link__btn">
        <img
          className="link__img"
          src="../Assets/linkedin.svg"
          alt="linkedin"
        />
        <span className="link__text">LinkedIn</span>
      </button>
    </div>
  );
}
