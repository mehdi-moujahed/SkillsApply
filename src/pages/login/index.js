import { Button, Grid } from "@material-ui/core";
import React from "react";
import "./style.css";
import mySvg from "../../assets/svg/background-login.svg";
import CustomizedTextField from "../../component/textfield";
import Typography from "@material-ui/core/Typography";

export default function Index() {
  return (
    <div
      // lg={5}
      style={{
        backgroundImage: `url(${mySvg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flex: 1,
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Typography
          variant="h4"
          component="h4"
          style={{ color: "white", marginTop: 30 }}
        >
          Créer Un Compte
        </Typography>
        <div
          style={{
            display: "flex",
            width: "100vw",
            justifyContent: "space-between",
            maxWidth: "45vw",
            marginTop: 115,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // marginRight: 200,
            }}
          >
            <div style={{ marginBottom: 100 }}>
              <CustomizedTextField label="Nom de la société" type="text" />
            </div>
            <div>
              <CustomizedTextField label="Adresse Email" type="email" />
            </div>
          </div>
          <div>
            <div style={{ marginBottom: 100 }}>
              <CustomizedTextField label="Mot de passe" type="password" />
            </div>
            <div>
              <CustomizedTextField
                label="Confirmer Mot de passe"
                type="password"
              />
            </div>
          </div>
        </div>
        <Button
          style={{ marginTop: 90, borderRadius: 15 }}
          variant="contained"
          color="primary"
        >
          confirmer
        </Button>
      </Grid>
    </div>
  );
}
