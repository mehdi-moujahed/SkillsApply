import React from "react";
import "./style.css";
export default function Achievements(props) {
  const { image, numbers, label } = props;
  return (
    <div className="achievements">
      <div className="numbers_container">
        <img src={image} id="img_achievements" alt=""/>
      </div>
      <div className="achievements_text_container">
        <p className="achievements_text"> {numbers} </p>
        <p className="achievements_text"> {label} </p>
      </div>
    </div>
  );
}
