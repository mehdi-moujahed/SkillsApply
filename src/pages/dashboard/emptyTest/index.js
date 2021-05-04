import { Button, Typography } from "@material-ui/core";
import React from "react";
import "./style.css";

export default function EmptyTest() {
  return (
    <div className="empty_test_container">
      <img src="../create-test.png" alt="create test" id="empty_test_logo" />
      <div className="empty_test_second_container">
        <Typography id="empty_test_text">
          Les premiers pas pour créer votre propre test
        </Typography>
        <Button variant="outlined" id="empty_test_button">
          Créer votre premiére question
        </Button>
      </div>
    </div>
  );
}
