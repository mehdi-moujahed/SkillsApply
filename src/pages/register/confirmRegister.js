import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import CustomizedTextField from "../../component/textfield";
import { useHistory } from "react-router-dom";
import "./style.css";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

export default function Index() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
  return (
    <div className="main_container">
      <div id="logo">
        <Logo id="svg" />
      </div>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Typography variant="h4" component="h4" className="title">
          Valider Inscription
        </Typography>
        <div className="input_container">
          <div className="first_input_container">
            <div className="textfield">
              <CustomizedTextField label="Nom" type="text" required />
            </div>
            <div>
              <CustomizedTextField label="Téléphone" required type="tel" />
            </div>
          </div>
          <div>
            <div className="textfield">
              <CustomizedTextField label="Prénom" required type="text" />
            </div>
            <div>
              <CustomizedTextField
                label="Adresse de la société"
                required
                type="text"
              />
            </div>
          </div>
        </div>
        <Button
          className="button"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          créer compte
        </Button>
      </Grid>
    </div>
  );
}
