import { Button, Grid, Link } from "@material-ui/core";
import React from "react";
import "./style.css";
import CustomizedTextField from "../../component/textfield";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

export default function Register() {
  let history = useHistory();

  function handleClick() {
    history.push("/confirmregister");
  }

  function handleClickLogin() {
    history.push("/login");
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
          Créer Un Compte
        </Typography>
        <div className="input_container">
          <div className="first_input_container">
            <div className="textfield">
              <CustomizedTextField
                label="Nom de la société"
                required
                type="text"
              />
            </div>
            <div>
              <CustomizedTextField
                label="Mot de passe"
                required
                type="password"
              />
            </div>
          </div>
          <div>
            <div className="textfield">
              <CustomizedTextField
                label="Adresse Email"
                required
                type="email"
              />
            </div>
            <div>
              <CustomizedTextField
                label="Confirmer Mot de passe"
                type="password"
                required
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
          confirmer
        </Button>
        <div className="register_footer">
          <Typography
            variant="subtitle2"
            style={{ color: "white", marginRight: 30 }}
          >
            Vous avez déja un compte ?
          </Typography>
          <Link color="primary" id="login_link" onClick={handleClickLogin}>
            Se Connecter
          </Link>
        </div>
      </Grid>
    </div>
  );
}
