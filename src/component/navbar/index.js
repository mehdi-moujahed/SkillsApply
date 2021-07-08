import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  logo: {
    flexGrow: 1,
    marginTop: 5,
  },
}));

export default function NavBarHeader() {
  const classes = useStyles();

  let history = useHistory();

  function handleClickPrices() {
    history.push("/prices");
  }
  function handleClickHome() {
    history.push("/");
  }
  function handleClickFeatures() {
    history.push("/features");
  }
  function handleClickLogin() {
    history.push("/login");
  }
  function handleClickContact() {
    history.push("/contact");
  }
  return (
    <div>
      <AppBar position="static" id="appbar">
        <Toolbar>
          <div className={classes.logo}>
            <Logo id="svg" />
          </div>

          <div>
            <Button
              color="inherit"
              id="appBar_button"
              onClick={handleClickHome}
            >
              accueil
            </Button>
            <Button
              color="inherit"
              id="appBar_button"
              onClick={handleClickFeatures}
            >
              fonctionnalités
            </Button>
            <Button
              color="inherit"
              id="appBar_button"
              onClick={handleClickPrices}
            >
              prix
            </Button>
            <Button
              id="appBar_button"
              color="inherit"
              onClick={handleClickContact}
            >
              Contact
            </Button>
            <Button
              id="appBar_button"
              color="inherit"
              onClick={handleClickLogin}
            >
              Connexion
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
