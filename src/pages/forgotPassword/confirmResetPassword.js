import {
  Button,
  Collapse,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { VisibilityOff } from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";
import { ReactComponent as ErrorLogo } from "../../assets/svg/email-noverified.svg";
import "./style.css";
import { Alert } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import {
  resetPasswordAPI,
  setResetPasswordSuccessMsg,
} from "../../store/action";
export default function ResetPassword() {
  const axios = require("axios").default;

  let { token } = useParams();

  const [showPassword, setShowPassword] = useState("password");
  const [showVerifPassword, setShowVerifPassword] = useState("password");
  const [open, setOpen] = useState(false);
  const [openResendMail, setOpenResendMail] = useState(false);
  const [verifToken, setVerifToken] = useState(false);
  const [verifTime, setVerifTime] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const dispatch = useDispatch();

  const resetPasswordSuccessMsg = useSelector(
    (state) => state.todos.resetPassword
  );

  useEffect(() => {
    axios
      .post(`http://127.0.0.1:8080/manager/verifToken/${token}`)
      .then(function (response) {
        if (response.status === 200) {
          console.log("reponse", response);
          setVerifToken(response.data.status);
          setVerifTime(response.data.tokenTime);
        }
      })
      .catch(function (error) {
        console.log("error", { error });
      });
  }, []);

  useEffect(() => {
    if (resetPasswordSuccessMsg !== "") {
      setSuccessMsg(resetPasswordSuccessMsg);
      setOpen(true);
      dispatch(setResetPasswordSuccessMsg(""));
    }
  }, [resetPasswordSuccessMsg]);

  function handleClickPasswordIcon() {
    if (showPassword === "password") setShowPassword("text");
    else setShowPassword("password");
  }
  function handleClickVerifPasswordIcon() {
    if (showVerifPassword === "password") setShowVerifPassword("text");
    else setShowVerifPassword("password");
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="forgotPassword_main_container">
        {verifToken ? (
          verifTime ? (
            <>
              <form
                onSubmit={handleSubmit((data) => {
                  console.log("dataaa", data);
                  dispatch(
                    resetPasswordAPI(`confirmResetPassword/${token}`, data)
                  );
                })}
                className="form_forgotPassword"
                style={{ height: "50%", width: "75%" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: 20,
                    height: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Typography variant="h5" id="forgotPassword_title">
                      Réinitialisation mot de passe
                    </Typography>
                  </div>
                  <div className="forgotPassword_seperator"></div>
                  <div className="forgotPassword_second_container">
                    <Typography
                      variant="subtitle1"
                      id="forgotPassword_subtitle"
                    >
                      Veuillez saisir votre nouveau mot de passe
                    </Typography>
                    <TextField
                      className="mailForgotPassword"
                      id="filled-basic"
                      label="Nouveau mot de passe"
                      variant="filled"
                      type={showPassword}
                      style={{ whiteSpace: "pre-line", marginBottom: 20 }}
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
                    <TextField
                      id="newPassword"
                      className="mailForgotPassword"
                      label="Resaisir nouveau mot de passe"
                      variant="filled"
                      type={showVerifPassword}
                      style={{ whiteSpace: "pre-line" }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              style={{ color: "black" }}
                              onClick={handleClickVerifPasswordIcon}
                            >
                              {showVerifPassword === "password" ? (
                                <VisibilityOff />
                              ) : (
                                <VisibilityIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      {...register("newPassword", {
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
                      error={errors.newPassword ? true : false}
                      helperText={
                        errors.newPassword && errors.newPassword.message
                      }
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
                  {successMsg}
                </Alert>
              </Collapse>
            </>
          ) : (
            <div className="not_found_container">
              <ErrorLogo id="error_svg" />
              <Typography variant="subtitle1" id="token_error_title">
                La durée de l'email a dépassé les 24h !
              </Typography>
              <Button
                id="notFound_button"
                onClick={() => setOpenResendMail(true)}
                variant="outlined"
              >
                Envoyer un nouveau email
              </Button>
              <Collapse in={openResendMail} style={{ marginTop: 20 }}>
                <Alert
                  severity="success"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpenResendMail(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  Un nouveau email vous a été envoyé
                </Alert>
              </Collapse>
            </div>
          )
        ) : (
          <div className="not_found_container">
            <img
              src="../not-found.png"
              alt="not-found-img"
              id="not_found_svg"
            />
            {/* <NotFoundLogo id="not_found_svg" /> */}
            <Typography variant="h6" id="not_found_title">
              Il semble que la page n'existe plus
            </Typography>
            <Button
              id="notFound_button"
              variant="outlined"
              onClick={() => history.push("/")}
            >
              Retour à la page d'accueil
            </Button>
          </div>
        )}
      </div>
      <div className="main_container">
        <img src="../logo.png" id="logo_login" alt="" />
      </div>
    </div>
  );
}
