import React from "react";
import "./style.css";
export default function Achievements(props) {
  const { image, numbers, label } = props;
  return (
    <div
      style={{
        display: "flex",
        //  flex: 1,
        flexDirection: "column",
        //  width: 350,
        //  justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="numbers_container">
        <img src={image} style={{ height: 130, width: 130 }} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p className="achievements_text"> {numbers} </p>
        <p className="achievements_text"> {label} </p>
      </div>
    </div>
  );
}
