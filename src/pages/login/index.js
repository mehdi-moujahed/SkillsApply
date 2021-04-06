import React from "react";
import { Button, Grid, Link } from "@material-ui/core";
import "./style.css";
import CustomizedTextField from "../../component/textfield";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
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
        <Typography
          variant="h4"
          style={{ paddingTop: 80 }}
          component="h4"
          className="title"
        >
          Bienvenue à Bord
        </Typography>
        <div className="input_container2">
          <div style={{ marginBottom: 60 }}>
            <CustomizedTextField label="Adresse Email" type="email" />
          </div>
          <div>
            <CustomizedTextField label="Mot de passe" type="password" />
          </div>
        </div>
        <Button
          className="button"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Se Connecter
        </Button>
        <div className="bottom_container">
          <Typography variant="subtitle2" id="login_label">
            Vous n'êtes pas encore inscrit ?
          </Typography>
          <Link color="primary" id="login_link" onClick={handleClick}>
            S'inscrire
          </Link>
        </div>
      </Grid>
    </div>
  );
}
