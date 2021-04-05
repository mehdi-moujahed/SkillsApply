import { Button, Grid } from "@material-ui/core";

import React from "react";
import "./style.css";
import CustomizedTextField from "../../component/textfield";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

export default function Index() {
  let history = useHistory();

  function handleClick() {
    history.push("/confirmregister");
  }

  return (
    <div className="main_container">
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Typography variant="h4" component="h4" className="title">
          Créer Un Compte
        </Typography>
        <div className="input_container">
          <div className="first_input_container">
            <div className="textfield">
              <CustomizedTextField label="Nom de la société" type="text" />
            </div>
            <div>
              <CustomizedTextField label="Mot de passe" type="password" />
            </div>
          </div>
          <div>
            <div className="textfield">
              <CustomizedTextField label="Adresse Email" type="email" />
            </div>
            <div>
              <CustomizedTextField
                label="Confirmer Mot de passe"
                type="password"
              />
            </div>
          </div>
        </div>
        {/* <Link to="/confirmRegister" className="button">
          Confirmer
        </Link> */}
        <Button
          className="button"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          confirmer
        </Button>
      </Grid>
    </div>
  );
}
