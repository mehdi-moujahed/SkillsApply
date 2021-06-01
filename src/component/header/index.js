import React from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
    marginTop: 5,
  },
}));
export default function Header(props) {
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
  const { Iconsvg, title, subtitle, leftoright } = props;
  return (
    <div>
      <div className="main_container_header">
        <div className={classes.root}>
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
                <Button id="appBar_button" color="inherit">
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
          <div
            className="header_container"
            style={{
              flexDirection: leftoright ? "row" : "row-reverse",
            }}
          >
            {<Iconsvg />}
            <div>
              <Typography variant="h3" id="header_title">
                {title}
              </Typography>
              <Typography variant="h5" id="header_subtitle">
                {subtitle}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
