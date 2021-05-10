import React, { useState } from "react";
import {
  Button,
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
import { abc } from "../../store/action";
import { useForm } from "react-hook-form";

const FormValues = {
  firstName: "",
  lastName: "",
  phoneNumber: 0,
  adress: "",
  companyName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Register() {
  const registerForm = useSelector((state) => state.todos.registerForm);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(FormValues);

  console.log(errors);
  // const onSubmit = (data) => console.log(data);

  const [showPassword, setShowPassword] = useState("password");

  const [email, setEmail] = useState();

  const [nextPage, setNextPage] = useState(false);

  let history = useHistory();

  function handleClickPasswordIcon() {
    if (showPassword === "password") setShowPassword("text");
    else setShowPassword("password");
  }

  function handleClickNextPage() {
    setNextPage(true);
  }

  function test() {
    console.log("confimer pressed");
  }

  function handleClickLogin() {
    history.push("/login");
  }

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
            // justifyContent: "space-between",
            // width: "100%",
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
                console.log("this is data :", data);
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
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "email is not valid !",
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
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                {...register("password", {
                  required: "mot de passe est obligatoire",
                  pattern: {
                    value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
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
                id="repeat-password"
                label="Vérifier Mot de passe"
                variant="filled"
                type={showPassword}
                style={{ width: "22vw" }}
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
                {...register("confirmPassword", {
                  required: "mot de passe est obligatoire",
                  // maxLength: 16,
                  // minLength: 8,
                })}
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
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TextField
                id="firstName"
                label="Nom"
                variant="filled"
                style={{ width: "22vw", marginBottom: 50 }}
                type="text"
              />
              <TextField
                id="lastName"
                label="Prénom"
                variant="filled"
                style={{ width: "22vw", marginBottom: 50 }}
                type="text"
              />
              <TextField
                id="phoneNumber"
                label="Télephone"
                variant="filled"
                style={{ width: "22vw", marginBottom: 50 }}
                type="tel"
              />
              <TextField
                id="adress"
                label="Adresse"
                variant="filled"
                style={{ width: "22vw" }}
                type="text"
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
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Button
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
            onClick={nextPage ? test : handleClickNextPage}
            type="submit"
          >
            {nextPage ? <p>confirmer </p> : <p>continuer</p>}
          </Button> */}
        </div>
      </div>
      <div className="register_main_container">
        <img src="../logo.png" id="register_logo" />
      </div>
    </div>
  );
}
