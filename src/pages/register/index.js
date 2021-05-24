import React, { useEffect, useState } from "react";
import {
  Button,
  Collapse,
  FormControl,
  IconButton,
  InputAdornment,
  Link,
  TextField,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { VisibilityOff } from "@material-ui/icons";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import {
  abc,
  signupAPI,
  setErrorMsgAPI,
  setSuccessMsgAPI,
} from "../../store/action";
import { useForm } from "react-hook-form";
import { Alert } from "@material-ui/lab";
import CloseIcon from "@material-ui/icons/Close";

export default function Register(props) {
  const axios = require("axios").default;

  const dispatch = useDispatch();

  const registerForm = useSelector((state) => state.todos.registerForm);

  const userAdded = useSelector((state) => state.todos.registerForm);

  const errorMsgAPI = useSelector((state) => state.todos.error);

  const successMsgAPI = useSelector((state) => state.todos.success);

  const [showPassword, setShowPassword] = useState("password");

  const [showVerifPassword, setShowVerifPassword] = useState("password");

  const [open, setOpen] = useState(true);

  const [errorMsg, seterrorMsg] = useState();

  const [successMsg, setSuccessMsg] = useState();

  const [nextPage, setNextPage] = useState(false);

  const [valuesForm, setvaluesForm] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: 0,
    address: "",
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let history = useHistory();

  function handleClickPasswordIcon() {
    if (showPassword === "password") setShowPassword("text");
    else setShowPassword("password");
  }
  function handleClickVerifPasswordIcon() {
    if (showVerifPassword === "password") setShowVerifPassword("text");
    else setShowVerifPassword("password");
  }

  // function checkPasswords(password, verifPassword) {
  //   if (password === verifPassword) {
  //     return true;
  //   } else {
  //     seterrorMsg(
  //       "Les deux mot de passes que vous avez saisie ne sont pas identiques"
  //     );
  //     return false;
  //   }
  // }

  function handleClickNextPage() {
    setNextPage(true);
  }

  function test() {
    console.log("confimer pressed");
  }

  function handleClickLogin() {
    history.push("/login");
  }

  useEffect(() => {
    if (errorMsgAPI != "") {
      setOpen(true);
      seterrorMsg(errorMsgAPI);
      dispatch(setErrorMsgAPI(""));
    }
    if (successMsgAPI != "") {
      setOpen(true);
      setSuccessMsg(successMsgAPI);
      dispatch(setSuccessMsgAPI(""));
    }
  }, [errorMsgAPI, successMsgAPI]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton
            style={{
              color: "white",
              position: "absolute",
              backgroundColor: "black",
              right: 711,
              visibility: nextPage ? "inherit" : "hidden",
            }}
            onClick={() => setNextPage(false)}
          >
            <ArrowBackIosRoundedIcon fontSize="default" />
          </IconButton>

          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            Créer un compte
          </Typography>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {nextPage ? (
            <form
              style={{ display: "flex", flexDirection: "column" }}
              onSubmit={handleSubmit((data) => {
                console.log("dataaa", { data });
                console.log("formvalues", valuesForm);
                if (data.password === data.confirmPassword)
                  dispatch(signupAPI("manager/signup", data));
                else
                  seterrorMsg(
                    "Les deux mot de passes que vous avez saisie ne sont pas identiques"
                  );

                console.log("Redux ", userAdded);
              })}
            >
              <TextField
                id="companyName"
                label="Nom de la société"
                variant="filled"
                style={{ width: "22vw", marginBottom: 50 }}
                type="text"
                // onChange={(event) =>
                //   dispatch(abc({ societe: event.target.value }))
                // }
                {...register("companyName", {
                  required: "nom de la société est obligatoire",
                })}
                error={errors.companyName ? true : false}
                helperText={errors.companyName && errors.companyName.message}
              />

              <TextField
                // required={errors.email.required}
                id="email"
                label="Adresse email"
                variant="filled"
                style={{ width: "22vw", marginBottom: 50 }}
                type="email"
                // onChange={(event) => {
                //   setEmail(event.target.value);
                // }}
                {...register("email", {
                  required: {
                    value: true,
                    message: "adresse email est obligatoire",
                  },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "email non valide !",
                  },
                })}
                error={errors.email ? true : false}
                helperText={errors.email && errors.email.message}
              />

              <TextField
                id="password"
                label="Mot de passe"
                variant="filled"
                type={showPassword}
                style={{ width: "22vw", marginBottom: 50 }}
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
                {...register("password", {
                  required: "mot de passe est obligatoire",
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
                    message:
                      "with at least a symbol, upper and lower case letters and a number ",
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
              />
              <TextField
                id="confirmPassword"
                label="Vérifier Mot de passe"
                variant="filled"
                type={showVerifPassword}
                style={{ width: "22vw" }}
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
                {...register("confirmPassword", {
                  required: "mot de passe est obligatoire",
                  // maxLength: 16,
                  // minLength: 8,
                })}
                error={errors.confirmPassword ? true : false}
                helperText={
                  errors.confirmPassword && errors.confirmPassword.message
                }
              />
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
                  alignSelf: "center",
                  marginTop: 30,
                }}
                onClick={handleClickNextPage}
                type="submit"
              >
                continuer
              </Button>
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
                  Vous avez déja un compte?
                </Typography>
                <Link
                  variant="subtitle1"
                  color="primary"
                  style={{ cursor: "pointer" }}
                  onClick={handleClickLogin}
                >
                  Connectez-vous
                </Link>
              </div>
            </form>
          ) : (
            <form style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <TextField
                  id="firstName"
                  label="Nom"
                  variant="filled"
                  style={{ width: "22vw", marginBottom: 50 }}
                  type="text"
                  {...register("firstName", {
                    required: "nom est obligatoire",
                  })}
                  // onChange={(event) => {
                  //   setvaluesForm({
                  //     ...register,
                  //     firstName: event.target.value,
                  //   });
                  // }}
                  // value={valuesForm.firstName}
                  error={errors.firstName ? true : false}
                  helperText={errors.firstName && errors.firstName.message}
                />
                <TextField
                  id="lastName"
                  label="Prénom"
                  variant="filled"
                  style={{ width: "22vw", marginBottom: 50 }}
                  type="text"
                  value={props.lastName}
                  {...register("lastName", {
                    required: "prénom est obligatoire",
                  })}
                  error={errors.lastName ? true : false}
                  helperText={errors.lastName && errors.lastName.message}
                />
                <TextField
                  id="phoneNumber"
                  label="Télephone"
                  variant="filled"
                  style={{ width: "22vw", marginBottom: 50 }}
                  type="tel"
                  value={register.phoneNumber}
                  {...register("phoneNumber", {
                    required: "Télephone est obligatoire",
                  })}
                  error={errors.phoneNumber ? true : false}
                  helperText={errors.phoneNumber && errors.phoneNumber.message}
                />
                <TextField
                  id="address"
                  label="Adresse"
                  variant="filled"
                  style={{ width: "22vw" }}
                  type="text"
                  value={register.address}
                  {...register("address", {
                    required: "Adresse est obligatoire",
                  })}
                  error={errors.address ? true : false}
                  helperText={errors.address && errors.address.message}
                />
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
                    alignSelf: "center",
                    marginTop: 30,
                  }}
                  onClick={handleClickNextPage}
                  type="submit"
                >
                  continuer
                </Button>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 20,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      marginRight: 20,
                    }}
                  >
                    Vous avez déja un compte?
                  </Typography>
                  <Link
                    variant="subtitle1"
                    color="primary"
                    style={{ cursor: "pointer" }}
                    onClick={handleClickLogin}
                  >
                    Connectez-vous
                  </Link>
                </div>
              </div>
            </form>
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {errorMsg && (
            <Collapse in={open}>
              <Alert
                severity="error"
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
                {errorMsg}
              </Alert>
            </Collapse>
          )}
          {successMsg && (
            <Collapse in={open}>
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
          )}
        </div>
      </div>
      <div className="register_main_container">
        <img src="../logo.png" id="register_logo" />
      </div>
    </div>
  );
}
