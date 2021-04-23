import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./style.css";
// const styles = {
//   root: {
//     background: "white",
//   },
//   input: {
//     color: "black",
//   },
// };

export default function CustomizedTextField(props) {
  const { ...rest } = props;

  return (
    <TextField
      className="custom_textfield"
      variant="outlined"
      // color="secondary"
      style={{ width: 250 }}
      {...rest}
    />
  );
}

CustomizedTextField.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

// export default withStyles(styles)(CustomizedTextField);
