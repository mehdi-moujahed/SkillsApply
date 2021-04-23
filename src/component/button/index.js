import { Button } from "@material-ui/core";
import React from "react";

export default function CustomButton(props) {
  const { label, ...rest } = props;
  return (
    <div>
      <Button variant="contained" color="primary" {...rest}>
        {label}
      </Button>
    </div>
  );
}
