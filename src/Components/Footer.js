import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <a href="/" className="footer__link">
        <img
          src="../Assets/Twitter .svg"
          className="footer__img"
          alt="twitter"
        />
      </a>
      <a href="/" className="footer__link">
        <img
          src="../Assets/Facebook.svg"
          className="footer__img"
          alt="facebook"
        />
      </a>
      <a href="/" className="footer__link">
        <img
          src="../Assets/Instagram.svg"
          className="footer__img"
          alt="instagram"
        />
      </a>
      <a href="/" className="footer__link">
        <img src="../Assets/GitHub.svg" className="footer__img" alt="github" />
      </a>
    </div>
  );
}
