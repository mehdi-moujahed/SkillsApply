import React, { useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
} from "@material-ui/core";
import "./style.css";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { VisibilityOff } from "@material-ui/icons";

export default function Index() {
  const [showPassword, setShowPassword] = useState("password");
  let history = useHistory();

  function handleClickPasswordIcon() {
    if (showPassword === "password") setShowPassword("text");
    else setShowPassword("password");
  }

  function handleClick() {
    history.push("/home");
  }

  function handleClickRegister() {
    history.push("/");
  }
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          flex: 1,
        }}
      >
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          Bienvenue à bord
        </Typography>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            style={{ width: "22vw", marginBottom: 100 }}
            type="email"
          />

          <TextField
            id="filled-basic"
            label="Mot de passe"
            variant="filled"
            type={showPassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    style={{ color: "black" }}
                    onClick={handleClickPasswordIcon}
                  >
                    {showPassword === "password" ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            style={{
              backgroundColor: "#008288",
              color: "white",
              textTransform: "capitalize",
              width: 200,
              fontSize: 17,
              borderRadius: 30,
              height: 40,
            }}
          >
            Se Connecter
          </Button>
          <div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
            <Typography
              variant="subtitle1"
              style={{
                fontWeight: "bold",
                textAlign: "center",
                marginRight: 20,
              }}
            >
              Vous n'avez pas encore un compte?
            </Typography>
            <Link
              variant="subtitle1"
              color="primary"
              style={{ cursor: "pointer" }}
              onClick={handleClickRegister}
            >
              Inscrivez-vous
            </Link>
          </div>
        </div>
      </div>
      <div className="main_container">
        <img src="../logo.png" id="logo_login" />
      </div>
    </div>
  );
}
