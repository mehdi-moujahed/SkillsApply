import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import {
  addResultAPI,
  deleteResult,
  getQuestionsTest,
  setCandidatePassword,
  setCandidatePasswordAPI,
  setCandidatePasswordError,
  setResults,
  updateResult,
} from "../../store/action";
import "./style.css";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import {
  Button,
  FormControl,
  Typography,
  FormControlLabel,
  Checkbox,
  Modal,
  TextField,
  InputAdornment,
  IconButton,
  Collapse,
} from "@material-ui/core";
import { Box } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { VisibilityOff } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import { Alert } from "@material-ui/lab";
import CloseIcon from "@material-ui/icons/Close";
import { updateTestRate } from "../../store/action";

export default function TestExam() {
  const location = useLocation();

  const { path, url } = useRouteMatch();

  const labels = {
    1: "Inutile",
    2: "Mauvais",
    3: "Moyen",
    4: "Bien",
    5: "Excellent",
  };

  const [state, setState] = useState({});

  const [value, setValue] = useState(0);

  const [hover, setHover] = useState(-1);

  const [open, setOpen] = useState(false);

  const [showPassword, setShowPassword] = useState("password");

  const [showVerifPassword, setShowVerifPassword] = useState("password");

  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  const history = useHistory();

  const candidate = useSelector(
    (state) => state.candidateReducer.candidateTest
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const idQuestion = new URLSearchParams(location.search).get("id");

  const handleClickPasswordIcon = () => {
    if (showPassword === "password") setShowPassword("text");
    else setShowPassword("password");
  };

  const handleClickVerifPasswordIcon = () => {
    if (showVerifPassword === "password") setShowVerifPassword("text");
    else setShowVerifPassword("password");
  };

  const candidatePassowrdUpdated = useSelector(
    (state) => state.candidateReducer.candidatePassowrd
  );

  const candidatePassowrdErrorMsg = useSelector(
    (state) => state.candidateReducer.candidatePasswordError
  );

  const questionId = useSelector(
    (state) => state.testReducer.testToPass?.questionsID[idQuestion - 1]
  );

  const totalQuestions = useSelector(
    (state) => state.testReducer.testToPass?.questionsID.length
  );

  const testId = useSelector((state) => state.testReducer.testToPass?.id);

  const managerId = useSelector(
    (state) => state.testReducer.testToPass?.managerID
  );

  const candidateId = useSelector(
    (state) => state.candidateReducer.candidateTest?.id
  );

  const result = useSelector((state) => state.testReducer.result);

  useEffect(() => {
    dispatch(getQuestionsTest("getQuestion", questionId));
    dispatch(setResults({ questionId, answersId: [] }));
  }, [idQuestion]);

  useEffect(() => {
    if (value !== 0) dispatch(updateTestRate("rateTest", testId, value));
  }, [value]);

  useEffect(() => {
    if (candidatePassowrdUpdated !== "") {
      setOpen(true);
    }
    if (candidatePassowrdErrorMsg !== "") {
      setOpen(true);
    }
  }, [candidatePassowrdUpdated, candidatePassowrdErrorMsg]);

  const handleChangeAnswers = (id) => {
    result[idQuestion - 1].answersId.some((obj) => id === obj)
      ? dispatch(deleteResult(idQuestion - 1, id))
      : dispatch(updateResult(idQuestion - 1, id));
  };

  const question = useSelector((state) => state.testReducer.examQuestions);

  const modalRate = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "100%",
        width: "100%",
      }}
    >
      {value === 0 ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-around",
            height: "100%",
            width: "100%",
          }}
        >
          <Typography
            style={{ color: "white", fontWeight: "bold" }}
            variant="h4"
          >
            Félicitations vous avez terminé votre test
          </Typography>
          <Typography style={{ color: "white" }} variant="h5">
            Votre résultat vous sera envoyé par email
          </Typography>
          <Rating
            name="hover-feedback"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            style={{ fontSize: 70 }}
          />
          {value !== null && (
            <Typography style={{ color: "white" }} variant="h6">
              {labels[hover !== -1 ? hover : value]}
            </Typography>
          )}
          <Typography style={{ color: "white" }} variant="subtitle1">
            Aidez-nous à évaluez nos tests en choisissant la note qui vous
            convient
          </Typography>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: "100%",
            width: "100%",
          }}
        >
          <Typography
            style={{ color: "white", fontWeight: "bold" }}
            variant="h4"
          >
            Terminer votre inscription
          </Typography>
          <Typography
            style={{ color: "white", fontWeight: "bold" }}
            variant="subtitle1"
          >
            Veuillez entrez votre mot de passe pour terminer votre inscription
          </Typography>

          <form
            onSubmit={handleSubmit((data) => {
              console.log("dataaa", { data });
              if (data.password === data.confirmPassword) {
                dispatch(
                  setCandidatePasswordAPI(
                    "candidateUpdatePassword",
                    candidate.id,
                    {
                      newPassword: data.password,
                      confirmNewPassword: data.confirmPassword,
                    }
                  )
                );
              } else
                dispatch(
                  setCandidatePasswordError(
                    "Les deux mot de passes ne sont pas identiques "
                  )
                );
            })}
          >
            <div
              style={{ display: "flex", flexDirection: "column" }}
              className="candidate_register"
            >
              <TextField
                variant="outlined"
                color="primary"
                className="rate_textField"
                style={{
                  width: 465,
                }}
                label="Nom et Prénom"
                defaultValue={candidate.lastName + " " + candidate.firstName}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                variant="outlined"
                color="primary"
                label="Email"
                defaultValue={candidate.email}
                InputProps={{
                  readOnly: true,
                }}
                className="rate_textField"
                style={{
                  width: 465,
                }}
              />

              <TextField
                variant="outlined"
                color="primary"
                className="rate_textField"
                label="Mot de passe"
                type={showPassword}
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
                style={{
                  width: 465,
                }}
                {...register("password", {
                  required: "mot de passe est obligatoire",
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
                    message:
                      "le mot de passe doit contenir au moins une lettre majiscule et miniscule et une nombre ",
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
                variant="outlined"
                color="primary"
                className="rate_textField"
                style={{
                  width: 465,
                }}
                label="Retaper votre mot de passe"
                type={showVerifPassword}
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
                error={errors.confirmPassword ? true : false}
                helperText={
                  errors.confirmPassword && errors.confirmPassword.message
                }
              />
              <Button
                variant="outlined"
                color="primary"
                id="candidate_register_button"
                type="submit"
              >
                Confirmer
              </Button>
            </div>
          </form>
          <Collapse in={open}>
            <Alert
              severity={candidatePassowrdUpdated !== "" ? "success" : "error"}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                    dispatch(setCandidatePassword(""));
                    dispatch(setCandidatePasswordError(""));
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {candidatePassowrdUpdated !== ""
                ? candidatePassowrdUpdated
                : candidatePassowrdErrorMsg}
            </Alert>
          </Collapse>
        </div>
      )}
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="passingTest_header">
        <Logo style={{ paddingLeft: 15 }} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: 20,
        }}
      >
        <Box
          style={{
            height: 45,
            width: 150,
            borderRadius: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          boxShadow={5}
        >
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Étape {parseInt(idQuestion)} / {totalQuestions}
          </Typography>
        </Box>
        <Box
          style={{
            height: 45,
            width: 150,
            borderRadius: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          boxShadow={5}
        >
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            {question.length >= idQuestion &&
              question[idQuestion - 1]?.points + " points"}
          </Typography>
        </Box>
        <Box
          style={{
            height: 45,
            width: 150,
            borderRadius: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          boxShadow={5}
        >
          <Button
            color="primary"
            variant="outlined"
            style={{
              height: 45,
              width: 150,
              borderRadius: 15,
              backgroundColor: "#008288",
              color: "white",
              fontWeight: "bold",
              textTransform: "capitalize",
              fontSize: 16,
            }}
            onClick={() => {
              if (idQuestion < totalQuestions) {
                history.push(`/testExam?id=${parseInt(idQuestion) + 1}`);
              } else {
                setOpenModal(true);
                dispatch(
                  addResultAPI(
                    "addResultTest",
                    managerId,
                    testId,
                    candidateId,
                    result
                  )
                );
              }
            }}
          >
            {idQuestion == totalQuestions ? "Terminer" : "Suivant"}
          </Button>
        </Box>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box id="question_box" boxShadow={6}>
          <div style={{ backgroundColor: "#f2f3f7" }}>
            <Typography variant="subtitle1" id="question_box_title">
              Question n° : {parseInt(idQuestion)}
            </Typography>
          </div>
          <div id="box_question_seperator"></div>
          <div style={{ margin: 15 }}>
            <Typography variant="subtitle1">
              Choisissez la ou les bonnes réponses
            </Typography>
          </div>
          <div id="question_box_text">
            <Typography
              variant="subtitle1"
              style={{ fontWeight: "bold", marginLeft: 40 }}
            >
              {question.length >= idQuestion &&
                question[idQuestion - 1]?.question + "?"}
            </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "column", margin: 20 }}>
            {question.length >= idQuestion &&
              question[idQuestion - 1].answers.map((item, index) => (
                <FormControl required component="fieldset">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={
                          result.length >= idQuestion &&
                          result[idQuestion - 1].answersId.some(
                            (obj) => item.id === obj
                          )
                        }
                        onChange={() => handleChangeAnswers(item.id)}
                        color="primary"
                        name={item.answer}
                      />
                    }
                    label={item.answer}
                  />
                </FormControl>
              ))}
          </div>
        </Box>
      </div>
      <div
        style={{
          position: "absolute",
          left: 150,
        }}
      >
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {modalRate}
        </Modal>
      </div>
    </div>
  );
}
