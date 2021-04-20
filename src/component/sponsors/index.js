import React from "react";
import "./style.css";
export default function Sponsors(props) {
  const { image } = props;
  return (
    <div className="sponsors_main_container">
      <div id="first_circle">
        <img src={image} id="sponsors_logo" />
      </div>
      <div id="second_circle"></div>
    </div>
  );
}
