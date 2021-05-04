import {
  Box,
  Button,
  IconButton,
  makeStyles,
  Modal,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useState } from "react";
import "./style.css";
import EmptyTest from "../emptyTest";
import Scrollbars from "react-custom-scrollbars";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    // position: "absolute",
    display: "flex",
    flexDirection: "column",
    width: 600,
    height: 600,
    borderRadius: 30,
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
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

const questions = [
  {
    number: 1,
    type: "choix multiple",
    duration: "1 heures",
    score: "50",
    level: "Difficile",
  },
  {
    number: 2,
    type: "text",
    duration: "1 heures",
    score: "80",
    level: "Intermédiare",
  },
  {
    number: 3,
    type: "Programmation",
    duration: "2 heures",
    score: "100",
    level: "Facile",
  },
  {
    number: 4,
    type: "Correction Code",
    duration: "45 min",
    score: "90",
    level: "Difficile",
  },
  {
    number: 4,
    type: "Correction Code",
    duration: "45 min",
    score: "90",
    level: "Difficile",
  },
  {
    number: 4,
    type: "Correction Code",
    duration: "45 min",
    score: "90",
    level: "Difficile",
  },
  {
    number: 4,
    type: "Correction Code",
    duration: "45 min",
    score: "90",
    level: "Difficile",
  },
  {
    number: 4,
    type: "Correction Code",
    duration: "45 min",
    score: "90",
    level: "Difficile",
  },
  {
    number: 4,
    type: "Correction Code",
    duration: "45 min",
    score: "90",
    level: "Difficile",
  },
];

export default function CreateTest() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  //   const [modalStyle] = React.useState(getModalStyle);
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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <div
        style={{
          width: 600,
          height: 84,
          backgroundColor: "#008288",
          borderRadius: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AddCircleIcon color="secondary" />
        <Typography
          style={{
            fontWeight: "bold",
            fontSize: 20,
            color: "white",
            marginLeft: 10,
          }}
        >
          Nouvelle question
        </Typography>
      </div>
      <div>
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
          hidden={questionType == 30 ? false : true}
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
            </Select>
          </FormControl>
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
      </div>
      <Button
        variant="outlined"
        color="primary"
        style={{
          width: 165,
          height: 40,
          textTransform: "capitalize",
          marginBottom: 50,
          backgroundColor: "#008288",
          color: "white",
          borderRadius: 14,
        }}
      >
        Créer
      </Button>
    </div>
  );

  return questions.length > 0 ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          //   height: "100%",
          //   width: "100%",
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{
              fontSize: 20,
              fontWeight: "bold",
              width: "15%",
              textAlign: "center",
            }}
          >
            Questions
          </Typography>
          <Typography
            style={{
              fontSize: 20,
              fontWeight: "bold",
              width: "15%",
              textAlign: "center",
            }}
          >
            Type
          </Typography>
          <Typography
            style={{
              fontSize: 20,
              fontWeight: "bold",
              width: "15%",
              textAlign: "center",
            }}
          >
            Durée
          </Typography>
          <Typography
            style={{
              fontSize: 20,
              fontWeight: "bold",
              width: "15%",
              textAlign: "center",
            }}
          >
            Points
          </Typography>
          <Typography
            style={{
              fontSize: 20,
              fontWeight: "bold",
              width: "15%",
              textAlign: "center",
            }}
          >
            Difficulté
          </Typography>
          <div
            style={{ width: "15%", justifyContent: "center", display: "flex" }}
          >
            <Button
              variant="outlined"
              style={{
                height: 39,
                color: "white",
                fontWeight: "bold",
                textTransform: "none",
                borderRadius: 10,
                backgroundColor: "#008282",
                fontSize: 17,
                width: "83%",
              }}
            >
              Terminer
            </Button>
          </div>
        </div>
      </div>

      <Scrollbars
        style={{
          display: "flex",
          width: "100%",

          //   height: "100%",
        }}
        renderTrackVertical={(props) => (
          <div {...props} className="track-vertical" />
        )}
        renderThumbVertical={(props) => (
          <div {...props} className="thumb-vertical" />
        )}
      >
        <div style={{ marginLeft: 30, marginRight: 30 }}>
          {questions.map((item) => (
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: 60,
                width: "100%",
                marginTop: 30,
                borderRadius: 14,
              }}
              boxShadow={5}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    width: "15%",
                    textAlign: "center",
                  }}
                >
                  {item.number}
                </Typography>
                <Typography
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    width: "15%",
                    textAlign: "center",
                    textTransform: "capitalize",
                  }}
                >
                  {item.type}
                </Typography>
                <Typography
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    width: "15%",
                    textAlign: "center",
                  }}
                >
                  {item.duration}
                </Typography>
                <Typography
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    width: "15%",
                    textAlign: "center",
                  }}
                >
                  {item.score}
                </Typography>
                <Typography
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    width: "15%",
                    textAlign: "center",
                  }}
                >
                  {item.level}
                </Typography>
                <div
                  style={{
                    width: "15%",
                    justifyContent: "space-around",
                    display: "flex",
                  }}
                >
                  <IconButton>
                    <EditIcon style={{ color: "black" }} />
                  </IconButton>
                  <IconButton>
                    <FileCopyIcon style={{ color: "black" }} />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon style={{ color: "black" }} />
                  </IconButton>
                </div>
              </div>
            </Box>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            // alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          <Button
            variant="outlined"
            style={{
              backgroundColor: "#008288",
              textTransform: "none",
              height: 49,
              borderRadius: 14,
              width: 222,
              color: "white",
              fontSize: 15,
              fontWeight: "bold",
            }}
            onClick={handleOpen}
          >
            Créer une question
          </Button>
        </div>
      </Scrollbars>
      <div className="modal">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className={classes.modal}
        >
          {body}
        </Modal>
      </div>
    </div>
  ) : (
    <EmptyTest />
  );
}
