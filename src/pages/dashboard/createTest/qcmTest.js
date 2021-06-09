import {
  Button,
  FormControl,
  IconButton,
  makeStyles,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./style.css";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { RemoveCircleOutline } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion, editQuestion } from "../../../store/action";
import { useHistory, useLocation, useRouteMatch } from "react-router";
//import InputMask from "react-input-mask";
import "./style.css";

const useStyles = makeStyles(() => ({
  switch_track: {
    backgroundColor: "red",
  },
  switch_base: {
    color: "red",
    "&.Mui-disabled": {
      color: "#e886a9",
    },
    "&.Mui-checked": {
      color: "#95cc97",
    },
    "&.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#4CAF50",
    },
  },
  switch_primary: {
    "&.Mui-checked": {
      color: "#4CAF50",
    },
    "&.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#4CAF50",
    },
  },
  iconButton_base: {
    "&.MuiIconButton-root": {
      color: "red",
    },
    "&.Mui-disabled": {
      color: "#d8d8d8d8",
    },
  },
}));

export default function QcmTest(props) {
  const [state, setState] = useState({
    level: 10,
  });

  const dispatch = useDispatch();

  const history = useHistory();

  const location = useLocation();

  const { path, url } = useRouteMatch();

  const id = new URLSearchParams(location.search).get("id");

  const isQcm = new URLSearchParams(location.search).get("isQcm");

  const questionToEdit = useSelector(
    (state) => state.testReducer.questions[id]
  );

  useEffect(() => {
    if (id !== null) {
      setState({
        addAnswer: questionToEdit.answers,
        questionType: 10,
        question: questionToEdit.question,
        points: questionToEdit.points,
        duration: questionToEdit.duration,
        level: questionToEdit.level,
      });
    } else {
      setState({
        addAnswer: [
          { answer: "", status: true },
          { answer: "", status: false },
        ],
        questionType: 10,
        question: "",
        points: 0,
        duration: 0,
        level: 10,
      });
    }
  }, []);
  const handleChange = (event, index) => {
    setState({
      ...state,
      addAnswer: state.addAnswer?.map((obj, indexMap) =>
        indexMap === index ? { ...obj, state: event.target.checked } : obj
      ),
    });
  };

  const handleChangeQuestions = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const finishHandler = () => {
    if (id !== null) {
      dispatch(
        editQuestion(
          {
            question: state.question,
            answers: state.addAnswer,
            points: state.points,
            duration: state.duration,
            level: state.level,
            questionType: isQcm ? 10 : 20,
          },
          parseInt(id)
        )
      );
    } else {
      dispatch(
        addQuestion({
          question: state.question,
          answers: state.addAnswer,
          points: state.points,
          duration: state.duration,
          level: state.level,
          questionType: isQcm ? 10 : 20,
        })
      );
    }
    history.push(`${path.replace("/qcmtest", "/addtest")}`);
  };

  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // height: "100%",
        // justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex" }}>
        <div>
          <Typography
            variant="h6"
            style={{ fontWeight: "bold", marginBottom: 15 }}
          >
            Enoncé :
          </Typography>
          <TextField
            id="outlined-multiline-static"
            value={state.question}
            onChange={(event) => {
              setState({ ...state, question: event.target.value });
            }}
            multiline
            rows={10}
            variant="outlined"
            className="qcm_qeustion"
          />
        </div>
        {isQcm ? (
          <div style={{ marginLeft: 200 }}>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold", marginBottom: 15 }}
            >
              Réponses :
            </Typography>
            {state.addAnswer?.map((item, index) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 40,
                }}
              >
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  variant="outlined"
                  className="qcm_answers"
                  value={item?.answer}
                  onChange={(event) =>
                    setState({
                      ...state,
                      addAnswer: state.addAnswer.map((obj, indexMap) =>
                        indexMap === index
                          ? { ...obj, answer: event.target.value }
                          : obj
                      ),
                    })
                  }
                />
                <CloseIcon
                  style={{ color: "red", marginLeft: 10 }}
                  fontSize="large"
                />

                <Switch
                  classes={{
                    track: classes.switch_track,
                    switchBase: classes.switch_base,
                    colorPrimary: classes.switch_primary,
                  }}
                  color={item.status ? "primary" : "default"}
                  checked={item.status}
                  onChange={(event) => handleChange(event, index)}
                  name="checkedA"
                  // disabled={state.checkedB}
                />
                <CheckIcon style={{ color: "green" }} fontSize="large" />

                <IconButton
                  onClick={() =>
                    setState({
                      ...state,
                      addAnswer: state.addAnswer.filter(
                        (item, indexFilter) => indexFilter !== index
                      ),
                    })
                  }
                  disabled={state.addAnswer.length > 2 ? false : true}
                  className={classes.iconButton_base}
                >
                  <RemoveCircleOutline fontSize="large" />
                </IconButton>
              </div>
            ))}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <IconButton
                style={{ marginLeft: 69 }}
                onClick={() =>
                  setState({
                    ...state,
                    addAnswer: [
                      ...state.addAnswer,
                      { answer: "", state: false },
                    ],
                  })
                }
              >
                <AddCircleIcon style={{ color: "black" }} fontSize="large" />
              </IconButton>
              <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                Ajouter une autre réponse
              </Typography>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 200,
            }}
          >
            <Typography
              variant="h6"
              style={{ fontWeight: "bold", marginBottom: 15 }}
            >
              Donnée :
            </Typography>
            <TextField
              id="outlined-multiline-static"
              // label="Multiline"
              multiline
              rows={10}
              variant="outlined"
              className="qcm_qeustion"
            />
          </div>
        )}
      </div>
      <div
        style={{
          marginTop: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            style={{ fontWeight: "bold", marginBottom: 15 }}
          >
            Points :
          </Typography>
          <TextField
            value={state.points}
            type="number"
            onChange={(event) => {
              setState({ ...state, points: event.target.value });
            }}
            id="test_points"
            InputLabelProps={{
              shrink: false,
            }}
            variant="outlined"
            className="qcm_answers"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            style={{ fontWeight: "bold", marginBottom: 15 }}
          >
            Durée (en minutes) :
          </Typography>
          <TextField
            value={state.duration}
            onChange={(event) => {
              setState({ ...state, duration: event.target.value });
            }}
            id="outlined-multiline-static"
            variant="outlined"
            type="number"
            className="qcm_answers"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            style={{ fontWeight: "bold", marginBottom: 15 }}
          >
            Difficulté :
          </Typography>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={state.level}
              onChange={handleChangeQuestions}
              style={{ borderRadius: 17, width: 237 }}
              name="level"
            >
              <MenuItem value={10}>Niveau Débutant</MenuItem>
              <MenuItem value={20}>Niveau Intermédiare</MenuItem>
              <MenuItem value={30}>Niveau Professionnel</MenuItem>
            </Select>
          </FormControl>
        </div>

        <Button
          variant="outlined"
          id="finish_test_button"
          onClick={() => finishHandler()}
        >
          {id ? "Modifier" : "Terminer"}
        </Button>
      </div>
    </div>
  );
}
