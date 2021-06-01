import {
  Button,
  makeStyles,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import Scrollbars from "react-custom-scrollbars";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    width: 600,
    height: 600,
    borderRadius: 30,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    alignItems: "center",
    justifyContent: "space-between",
  },
  formControl: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function EmptyTest() {
  const history = useHistory();

  const { path, url } = useRouteMatch();

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const [questionType, setQuestionType] = useState(10);

  const [questionLanguage, setQuestionLanguage] = useState("francais");

  const [technology, setTechnology] = useState(10);

  const handleChangeQuestions = (event) => {
    setQuestionType(event.target.value);
  };

  const handleChangeLanguage = (event) => {
    setQuestionLanguage(event.target.value);
  };

  const handleChangeTechnology = (event) => {
    setTechnology(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const selectPageQuestion = () => {
    switch (questionType) {
      case 10:
        return "/qcmtest";
      case 20:
        return "/textQuestion";
      case 30:
        return "/programmation";
      case 40:
        return "/codeCorrection";
    }
  };

  const questionModal = (
    <div className={classes.paper}>
      <div className="modal_header">
        <AddCircleIcon color="secondary" />
        <Typography id="modal_title">Nouvelle question</Typography>
      </div>
      <Scrollbars
        style={{
          display: "flex",
          width: "100%",
          height: "80%",
          alignItems: "center",
          flexDirection: "column",
        }}
        renderTrackVertical={(props) => (
          <div {...props} className="track-vertical" />
        )}
        renderThumbVertical={(props) => (
          <div {...props} className="thumb-vertical" />
        )}
      >
        <div className="questionModal_inputs">
          <div style={{ marginBottom: 30 }}>
            <Typography variant="h6" style={{ marginBottom: 5, marginLeft: 5 }}>
              Type de question :
            </Typography>
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={questionType}
                onChange={handleChangeQuestions}
                style={{ width: 330, height: 50 }}
              >
                <MenuItem value={10}>Question à choix multiples</MenuItem>
                <MenuItem value={20}>Text</MenuItem>
                <MenuItem value={30}>Programmation</MenuItem>
                <MenuItem value={40}>Correction du code</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div
            style={{ marginBottom: 30 }}
            hidden={questionType === 30 ? false : true}
          >
            <Typography variant="h6" style={{ marginBottom: 5, marginLeft: 5 }}>
              Language de Programmation :
            </Typography>
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={technology}
                onChange={handleChangeTechnology}
                style={{ width: 330, height: 50 }}
              >
                <MenuItem value={10}>Javascript</MenuItem>
                <MenuItem value={20}>Java</MenuItem>
                <MenuItem value={30}>PHP</MenuItem>
                <MenuItem value={40}>Python</MenuItem>
                <MenuItem value={50}>Autre</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div
            style={{ marginBottom: 30 }}
            hidden={technology === 50 && questionType === 30 ? false : true}
          >
            <TextField
              id="outlined-basic"
              label="Nom du language"
              variant="outlined"
              style={{ width: 330, height: 50 }}
            />
          </div>
          <div>
            <Typography variant="h6" style={{ marginBottom: 5, marginLeft: 5 }}>
              Langues :
            </Typography>
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={questionLanguage}
                onChange={handleChangeLanguage}
                style={{ width: 330, height: 50 }}
              >
                <MenuItem value={"francais"}>Français</MenuItem>
                <MenuItem value={"anglais"}>Anglais</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Button
            variant="outlined"
            color="primary"
            id="modal_button"
            style={{ marginTop: 20 }}
            onClick={() =>
              history.push(
                `${path.replace("/addtest", "")}${selectPageQuestion()}`
              )
            }
          >
            Créer
          </Button>
        </div>
      </Scrollbars>
    </div>
  );
  return (
    <div className="empty_test_container">
      <img src="../create-test.png" alt="create test" id="empty_test_logo" />
      <div className="empty_test_second_container">
        <Typography id="empty_test_text">
          Les premiers pas pour créer votre propre test
        </Typography>
        <Button
          variant="outlined"
          id="empty_test_button"
          onClick={() => setOpen(true)}
        >
          Créer votre premiére question
        </Button>
      </div>
      <div className="modal">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className={classes.modal}
        >
          {questionModal}
        </Modal>
      </div>
    </div>
  );
}
