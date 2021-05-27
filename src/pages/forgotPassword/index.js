import {
  Button,
  Collapse,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import CloseIcon from "@material-ui/icons/Close";
import "./style.css";

export default function ForgotPassword() {
  const axios = require("axios").default;
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="forgotPassword_main_container">
        <form
          onSubmit={handleSubmit((data) => {
            console.log("dataaa", data);
            axios
              .post(`http://127.0.0.1:8080/manager/resetPassword/${data.email}`)
              .then(function (response) {
                if (response.status === 200) {
                  console.log("reponse", response);
                  setOpen(true);
                }
              })
              .catch(function (error) {
                console.log("error", { error });
              });
          })}
          className="form_forgotPassword"
        >
          <div className="forgotPassword_banner">
            <div>
              <Typography variant="h5" id="forgotPassword_title">
                Réinitialisation mot de passe
              </Typography>
            </div>
            <div className="forgotPassword_seperator"></div>
            <div className="forgotPassword_second_container">
              <Typography variant="subtitle1" id="forgotPassword_subtitle">
                Veuillez entrez votre adresse email pour récupérer votre mot de
                passe
              </Typography>
              <TextField
                className="mailForgotPassword"
                label="Adresse email"
                variant="filled"
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
            </div>
            <div className="forgotPassword_seperator"></div>

            <div className="forgotPassword_button_container">
              <Button
                variant="outlined"
                id="forgotPassword_buttonCancel"
                onClick={() => history.push("/login")}
              >
                Annuler
              </Button>
              <Button
                variant="outlined"
                type="submit"
                id="forgotPassword_buttonConfirm"
              >
                Confirmer
              </Button>
            </div>
          </div>
        </form>

        <Collapse in={open} id="forgotPassword_alert">
          <Alert
            severity="success"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Un email vous a été envoyé
          </Alert>
        </Collapse>
      </div>
      <div className="main_container">
        <img src="../logo.png" id="logo_login" alt=""/>
      </div>
    </div>
  );
}
