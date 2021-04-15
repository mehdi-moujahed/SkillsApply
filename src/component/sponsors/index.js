import React from "react";
import "./style.css";
export default function Sponsors(props) {
  const { image } = props;
  return (
    <div style={{ display: "flex", height: 280, width: 280 }}>
      <div id="first_circle">
        <img src={image} style={{ height: 42, width: 250 }} />
      </div>
      <div id="second_circle"></div>
    </div>
  );
}
