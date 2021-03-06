import { Avatar, Button, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import React from "react";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import StarIcon from "@material-ui/icons/Star";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import "./style.css";
import { IconButton } from "@material-ui/core";

export default function CustomBar(props) {
  const {
    testImg,
    testName,
    duration,
    score,
    buttonLabel,
    onClick,
    testBar,
    width = "45vw",
    editable,
    onClickDelete,
    onClickEdit,
    candidate,
    candidateEmail,
    buttonStyle,
  } = props;

  const defaultProps = {
    bgcolor: "background.paper",
    m: 1,
    border: 2,
  };
  return (
    <div style={{ width: width }} className="tests_container">
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
          <Avatar
            style={{
              height: 56,
              width: 56,
              borderRadius: 30,
              backgroundColor: "#262626",
            }}
          >
            {testName.substring(0, 1).toUpperCase()}
          </Avatar>
        </Box>

        <p style={{ color: "white", fontSize: 16, paddingLeft: 15 }}>
          {testName}
        </p>
      </div>
      {!candidate ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: 40,
            }}
          >
            {testBar ? (
              <WatchLaterIcon color="secondary" />
            ) : (
              <img src="../test-logo.png" alt="" />
            )}
            <p style={{ color: "white", fontSize: 13, paddingLeft: 5 }}>
              {duration}
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {testBar ? (
              <StarIcon color="secondary" style={{ fontSize: 17 }} />
            ) : (
              <img src="../muscle-logo.png" alt="" />
            )}
            <p style={{ color: "white", fontSize: 13, paddingLeft: 5 }}>
              {score}
            </p>
          </div>
        </div>
      ) : (
        <Typography variant="subtitle2" style={{ color: "white" }}>
          {candidateEmail}
        </Typography>
      )}
      {editable ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "30%",
          }}
        >
          <div
            style={{
              height: 35,
              width: 35,
              backgroundColor: "green",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 20,
            }}
          >
            <IconButton onClick={onClickEdit}>
              <EditIcon style={{ color: "white" }} />
            </IconButton>
          </div>
          <div
            style={{
              height: 35,
              width: 35,
              backgroundColor: "red",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton onClick={onClickDelete}>
              <DeleteIcon style={{ color: "white" }} />
            </IconButton>
          </div>
        </div>
      ) : (
        ""
      )}
      <Button
        variant="outlined"
        id="show_test_button"
        style={buttonStyle}
        onClick={onClick}
      >
        {buttonLabel}
      </Button>
    </div>
  );
}
