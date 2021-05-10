import {
  Box,
  Button,
  IconButton,
  makeStyles,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useState } from "react";
import EmptyTest from "../emptyTest";
import Scrollbars from "react-custom-scrollbars";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./style.css";
import { Assignment } from "@material-ui/icons";

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
    // justifyContent: "space-between",
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

  const [open, setOpen] = useState(false);

  const [openTestModal, setOpenTestModal] = useState(false);

  const [testModalNextPage, setTestModalNextPage] = useState(false);

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

  const handleNextPageModal = () => {
    setTestModalNextPage(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenTestModal = () => {
    setOpenTestModal(true);
  };

  const handleCloseTestModal = () => {
    setOpenTestModal(false);
  };

  const questionModal = (
    <div className={classes.paper}>
      <div className="modal_header">
        <AddCircleIcon color="secondary" />
        <Typography id="modal_title">Nouvelle question</Typography>
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
      <Button variant="outlined" color="primary" id="modal_button">
        Créer
      </Button>
    </div>
  );

  const testModal = (
    <div className={classes.paper}>
      <div className="modal_header">
        <Assignment color="secondary" />
        <Typography id="modal_title">Création Test</Typography>
      </div>
      {!testModalNextPage ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 35,
          }}
        >
          <div style={{ marginBottom: 30 }}>
            <Typography variant="h6" style={{ marginBottom: 5, marginLeft: 5 }}>
              Titre :
            </Typography>
            <TextField
              id="outlined-multiline-static"
              variant="outlined"
              style={{ width: 465 }}
            />
          </div>
          <div>
            <Typography variant="h6" style={{ marginBottom: 5, marginLeft: 5 }}>
              Déscripiton :
            </Typography>
            <TextField
              id="outlined-multiline-static"
              rows={8}
              multiline
              variant="outlined"
              style={{ width: 465 }}
            />
          </div>
          <Button
            variant="outlined"
            color="primary"
            id="modal_button"
            onClick={handleNextPageModal}
            style={{ marginTop: 50 }}
          >
            Créer
          </Button>
        </div>
      ) : (
        <Scrollbars
          style={{
            display: "flex",
            width: "100%",
            height: "80%",
          }}
          renderTrackVertical={(props) => (
            <div {...props} className="track-vertical" />
          )}
          renderThumbVertical={(props) => (
            <div {...props} className="thumb-vertical" />
          )}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              marginTop: 35,
            }}
          >
            <div style={{ marginBottom: 30 }}>
              <Typography
                variant="h6"
                style={{ marginBottom: 5, marginLeft: 5 }}
              >
                Titre :
              </Typography>
              <TextField
                id="outlined-multiline-static"
                variant="outlined"
                style={{ width: 465 }}
                disabled={true}
              />
            </div>
            <div>
              <Typography
                variant="h6"
                style={{ marginBottom: 5, marginLeft: 5 }}
              >
                Déscripiton :
              </Typography>
              <TextField
                id="outlined-multiline-static"
                rows={8}
                multiline
                variant="outlined"
                disabled={true}
                style={{ width: 465 }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",
                marginTop: 30,
              }}
            >
              {[1, 2, 3].map(() => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    Points :
                  </Typography>
                  <Typography variant="subtitle1">120</Typography>
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                id="edit_button"
                // onClick={handleNextPageModal}
                style={{ marginTop: 50 }}
                onClick={() => setTestModalNextPage(false)}
              >
                Modifier
              </Button>
              <Button
                variant="outlined"
                color="primary"
                id="modal_button"
                // onClick={handleNextPageModal}
                style={{ marginTop: 50 }}
              >
                Terminer
              </Button>
            </div>
          </div>
        </Scrollbars>
      )}
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
              onClick={handleOpenTestModal}
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
          {questionModal}
        </Modal>
        <Modal
          open={openTestModal}
          onClose={handleCloseTestModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className={classes.modal}
        >
          {testModal}
        </Modal>
      </div>
    </div>
  ) : (
    <EmptyTest />
  );
}
