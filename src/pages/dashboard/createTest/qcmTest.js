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
  withStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import "./style.css";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveIcon from "@material-ui/icons/Remove";
import { RemoveCircle, RemoveCircleOutline } from "@material-ui/icons";

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
  const { isQcm } = props;
  const [state, setState] = useState({
    addAnswer: [
      { answer: "", state: true },
      { answer: "", state: false },
    ],
    questionType: 10,
  });

  const handleChange = (event, index) => {
    setState({
      ...state,
      addAnswer: state.addAnswer.map((obj, indexMap) =>
        indexMap === index ? { ...obj, state: event.target.checked } : obj
      ),
    });
  };

  const handleChangeQuestions = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
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
            // label="Multiline"
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
            {state.addAnswer.map((item, index) => (
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
                  color={item.state ? "primary" : "default"}
                  checked={item.state}
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
            id="outlined-multiline-static"
            multiline
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
            id="outlined-multiline-static"
            variant="outlined"
            className="qcm_answers"
            value="120"
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
              value={state.questionType}
              onChange={handleChangeQuestions}
              style={{ borderRadius: 17, width: 237 }}
              name="questionType"
            >
              <MenuItem value={10}>Question à choix multiples</MenuItem>
              <MenuItem value={20}>Text</MenuItem>
              <MenuItem value={30}>Programmation</MenuItem>
              <MenuItem value={40}>Correction du code</MenuItem>
            </Select>
          </FormControl>
        </div>

        <Button
          variant="outlined"
          style={{
            textTransform: "capitalize",
            backgroundColor: "#008288",
            color: "white",
            width: 175,
            height: 46,
            borderRadius: 11,
            fontSize: 16,
            fontWeight: "bold",
            alignSelf: "center",
            marginTop: 47,
          }}
        >
          Terminer
        </Button>
      </div>
    </div>
  );
}
