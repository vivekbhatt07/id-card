import React from "react";
import Person from "../Assets/Person.svg";

export default function Pic() {
  return (
    <div className="img-container">
      <img className="img" src={Person} alt="bio-pic" />
    </div>
  );
}
