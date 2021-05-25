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
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signinAPI } from "../../store/action";

const FormValues = {};

export default function Index() {
  const axios = require("axios").default;

  const [showPassword, setShowPassword] = useState("password");

  let history = useHistory();

  const dispatch = useDispatch();

  const userSingedin = useSelector((state) => state.todos.loginForm);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  function handleClickForgotPassword() {
    history.push("/forgotPassword");
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
        <form
          onSubmit={handleSubmit((data) => {
            console.log("dataaa", data);
            console.log("redux", userSingedin);
            dispatch(signinAPI("oauth/token", data));
          })}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            height: "55%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              id="filled-basic"
              label="Adresse email"
              variant="filled"
              style={{ width: "22vw", marginBottom: 100 }}
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Veuillez saisir votre adresse email",
                },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Adresse email non valide !",
                },
              })}
              error={errors.email ? true : false}
              helperText={errors.email && errors.email.message}
            />

            <TextField
              id="filled-basic"
              label="Mot de passe"
              variant="filled"
              type={showPassword}
              style={{ whiteSpace: "pre-line" }}
              {...register("password", {
                required: "Veuillez saisir votre mot de passe ",
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
                  message:
                    "Le mot de passe doit contenir au moins une lettre\nminiscule et majuscule, un symbole et un chiffire ",
                },
                maxLength: {
                  value: 16,
                  message:
                    "le mot de passe doit contenir entre 8 et 16 caractéres",
                },
                minLength: {
                  value: 8,
                  message:
                    "le mot de passe doit contenir entre 8 et 16 caractéres",
                },
              })}
              error={errors.password ? true : false}
              helperText={errors.password && errors.password.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      style={{ color: "black" }}
                      onClick={handleClickPasswordIcon}
                    >
                      {showPassword === "password" ? (
                        <VisibilityOff />
                      ) : (
                        <VisibilityIcon />
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
              type="submit"
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
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{ display: "flex", alignItems: "center", marginTop: 20 }}
              >
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
              <Link
                variant="subtitle1"
                color="primary"
                style={{ cursor: "pointer", textAlign: "center" }}
                onClick={handleClickForgotPassword}
              >
                Mot de passe oublié ?
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div className="main_container">
        <img src="../logo.png" id="logo_login" />
      </div>
    </div>
  );
}
