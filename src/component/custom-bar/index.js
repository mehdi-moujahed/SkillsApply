import { Avatar, Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import React from "react";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import StarIcon from "@material-ui/icons/Star";
import "./style.css";

export default function CustomBar(props) {
  const {
    testImg,
    testName,
    duration,
    score,
    buttonLabel,
    onClick,
    testBar,
  } = props;

  const defaultProps = {
    bgcolor: "background.paper",
    m: 1,
    border: 1,
  };
  return (
    <div className="tests_container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          borderColor="white"
          {...defaultProps}
          style={{ borderRadius: 30 }}
        >
          <img
            src={testImg}
            style={{ height: 56, width: 56, borderRadius: 30 }}
          />
        </Box>

        {/* 
        <img
          src={testImg}
          style={{ height: 62, width: 62, borderRadius: 30 }}
        /> */}

        <p style={{ color: "white", fontSize: 16, paddingLeft: 15 }}>
          {testName}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: 150,
        }}
      >
        {testBar ? (
          <WatchLaterIcon color="secondary" />
        ) : (
          <img src="../test-logo.png" />
        )}
        <p style={{ color: "white", fontSize: 13, paddingLeft: 5 }}>
          {duration}
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {testBar ? (
          <StarIcon color="secondary" style={{ fontSize: 17 }} />
        ) : (
          <img src="../muscle-logo.png" />
        )}

        {/* <StarIcon color="secondary" style={{ fontSize: 17 }} /> */}
        <p style={{ color: "white", fontSize: 13, paddingLeft: 5 }}>{score}</p>
      </div>
      <Button variant="outlined" id="show_test_button" onClick={onClick}>
        {buttonLabel}
      </Button>
    </div>
  );
}
