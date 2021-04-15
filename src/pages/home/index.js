import React from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import CustomButton from "../../component/button";
import { useHistory } from "react-router";
import { ReactComponent as HomeLogo } from "../../assets/svg/home-logo.svg";
import { ReactComponent as AboutusLogo } from "../../assets/svg/about-us-logo.svg";
import Achievements from "../../component/achievements";
import DeveloppersLogo from "../../assets/svg/developpers.png";
import TestLogo from "../../assets/svg/tests-done-logo.png";
import ClientsLogo from "../../assets/svg/clients-satisfaction-logo.png";
import Sponsors from "../../component/sponsors";
import BankLogo from "../../assets/svg/bank.png";
import Footer from "../../component/footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // boxShadow: "none",
    // backgroundColor: "#ffffff",
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  logo: {
    flexGrow: 1,
    marginTop: 5,
  },
}));

export default function Home() {
  let history = useHistory();

  function handleClick() {
    history.push("/login");
  }
  const classes = useStyles();
  return (
    <div>
      <div className="main_container_home">
        <div className={classes.root}>
          <AppBar
            position="static"
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
              // height: 64,
              // width: 20,
            }}
          >
            <Toolbar>
              {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            /> */}
              {/* <MenuIcon /> */}

              {/* <Typography variant="h6" className={classes.title}> */}
              <div className={classes.logo}>
                <Logo id="svg" />
              </div>
              {/* News
          </Typography> */}
              <div>
                <Button
                  color="inherit"
                  style={{
                    textTransform: "capitalize",
                    fontSize: 20,
                    // borderRadius: 15,
                  }}
                  // variant="contained"
                  // color="primary"
                >
                  accueil
                </Button>
                <Button
                  color="inherit"
                  style={{ textTransform: "none", fontSize: 20 }}
                >
                  A propos
                </Button>
                <Button
                  color="inherit"
                  style={{ textTransform: "capitalize", fontSize: 20 }}
                >
                  fonctionnalités
                </Button>
                <Button
                  color="inherit"
                  style={{ textTransform: "capitalize", fontSize: 20 }}
                >
                  prix
                </Button>
                <Button
                  color="inherit"
                  style={{ textTransform: "capitalize", fontSize: 20 }}
                >
                  Contact
                </Button>
                <Button
                  color="inherit"
                  style={{ textTransform: "capitalize", fontSize: 20 }}
                >
                  Connexion
                </Button>
              </div>
            </Toolbar>
          </AppBar>
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "space-around",
              marginTop: 50,
            }}
          >
            <div>
              <Typography variant="h3" style={{ color: "white" }}>
                La plateforme <br /> pour vos recrutements tech
              </Typography>
              <Typography
                variant="h5"
                style={{ color: "white", paddingTop: 40 }}
              >
                Trouver, filtrer et retenir des <br /> développeurs talentueux
              </Typography>
            </div>

            <HomeLogo id="home_logo" />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "90vw",
          justifyContent: "space-around",
          marginLeft: 40,
        }}
      >
        <p style={{ color: "#008288", fontSize: "xxx-large" }}>
          À Propos De Nous
        </p>
        <div
          style={{
            // width: window.innerWidth - 420,
            height: 1,
            backgroundColor: "#008288",
            marginTop: 17,
            width: "60vw",
          }}
        ></div>
      </div>
      <div className="about_us">
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "space-around",
            marginBottom: 221,
          }}
        >
          <AboutusLogo id="about_us_logo" />
          <p
            style={{
              color: "white",
              fontSize: "xx-large",
              marginRight: 80,
              marginTop: 92,
            }}
          >
            Notre but est de permettre <br />
            aux développeurs <br /> d'améliorer leurs <br />
            compétences en continu en
            <br />
            résolvant les problèmes de <br />
            code les plus motivants et <br />
            en échangeant avec les <br />
            meilleurs programmerus du
            <br />
            monde.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "90vw",
          justifyContent: "space-around",
          marginLeft: 40,
        }}
      >
        <p style={{ color: "#008288", fontSize: "xxx-large" }}>
          Nos Chiffres Clés
        </p>
        <div
          style={{
            // width: window.innerWidth - 420,
            height: 1,
            backgroundColor: "#008288",
            marginTop: 17,
            width: "60vw",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignSelf: "center",
        }}
      >
        <Achievements
          label="développeurs"
          numbers="1000+"
          image={DeveloppersLogo}
        />
        <Achievements label="Tests efféctués" numbers="500+" image={TestLogo} />
        <Achievements
          label="Clients satisfaits"
          numbers="95%"
          image={ClientsLogo}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "90vw",
          justifyContent: "space-around",
          marginLeft: 40,
          marginTop: 128,
        }}
      >
        <p style={{ color: "#008288", fontSize: "xxx-large" }}>
          Nos Partenaires
        </p>
        <div
          style={{
            // width: window.innerWidth - 420,
            height: 1,
            backgroundColor: "#008288",
            marginTop: 17,
            width: "60vw",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Sponsors image={BankLogo} />
        <Sponsors image={BankLogo} />
        <Sponsors image={BankLogo} />
        <Sponsors image={BankLogo} />
      </div>
      <Footer />
    </div>
  );
}
