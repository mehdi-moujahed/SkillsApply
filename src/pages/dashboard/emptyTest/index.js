import { Button, Typography } from "@material-ui/core";
import React from "react";
import "./style.css";

export default function EmptyTest() {
  return (
    <div
      className="empty_test_container"
      //   style={{
      //     display: "flex",
      //     flexDirection: "column",
      //     height: "100%",
      //     alignItems: "center",
      //     // justifyContent: "space-around",
      //   }}
    >
      <img
        src="../create-test.png"
        alt="create test"
        id="empty_test_logo"
        // style={{ height: 250, width: 260 }}
      />
      <div
        className="empty_test_second_container"
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   alignItems: "center",
        //   marginTop: 70,
        // }}
      >
        <Typography
          id="empty_test_text"
          // style={{ fontWeight: "bold", fontSize: 25 }}
        >
          Les premiers pas pour créer votre propre test
        </Typography>
        <Button
          variant="outlined"
          id="empty_test_button"
          //   style={{
          //     height: 45,
          //     borderRadius: 13,
          //     textTransform: "none",
          //     backgroundColor: "#008288",
          //     color: "white",
          //     marginTop: 35,
          //   }}
        >
          Créer votre premiére question
        </Button>
      </div>
    </div>
  );
}
