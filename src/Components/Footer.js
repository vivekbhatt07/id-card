import React from "react";
import Twitter from "../Assets/Twitter .svg";
import Facebook from "../Assets/Facebook.svg";
import Instagram from "../Assets/Instagram.svg";
import Github from "../Assets/GitHub.svg";

export default function Footer() {
  return (
    <div className="footer">
      <a href="/" className="footer__link">
        <img src={Twitter} className="footer__img" alt="twitter" />
      </a>
      <a href="/" className="footer__link">
        <img src={Facebook} className="footer__img" alt="facebook" />
      </a>
      <a href="/" className="footer__link">
        <img src={Instagram} className="footer__img" alt="instagram" />
      </a>
      <a href="/" className="footer__link">
        <img src={Github} className="footer__img" alt="github" />
      </a>
    </div>
  );
}
