import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = {
  root: {
    background: "grey",
  },
  input: {
    color: "white",
  },
};

function CustomizedTextField(props) {
  const { classes, label, type } = props;

  return (
    <TextField
      label={label}
      type={type}
      className={classes.root}
      variant="outlined"
      InputProps={{
        className: classes.input,
      }}
      color="secondary"
      style={{ width: 250 }}
    />
  );
}

CustomizedTextField.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default withStyles(styles)(CustomizedTextField);
