import {
  Box,
  Button,
  Collapse,
  IconButton,
  makeStyles,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useEffect, useState } from "react";
import EmptyTest from "../emptyTest";
import Scrollbars from "react-custom-scrollbars";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./style.css";
import { Assignment } from "@material-ui/icons";
import WarningIcon from "@material-ui/icons/Warning";
import { useHistory, useRouteMatch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuestion,
  addTest,
  deleteQuestion,
  setAddingTestSuccesMsg,
} from "../../../store/action";
import { clearTest } from "../../../store/action/test";
import { Alert } from "@material-ui/lab";
import CloseIcon from "@material-ui/icons/Close";

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

export default function CreateTest() {
  const classes = useStyles();

  let history = useHistory();

  let { path } = useRouteMatch();

  const [open, setOpen] = useState(false);

  const [openAlert, setOpenAlert] = useState(false);

  const [openTestModal, setOpenTestModal] = useState(false);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [testModalNextPage, setTestModalNextPage] = useState(false);

  const [questionType, setQuestionType] = useState(10);

  const [questionLanguage, setQuestionLanguage] = useState("francais");

  const [technology, setTechnology] = useState(10);

  const [selectedItem, setSelectedItem] = useState(0);

  const [testName, setTestName] = useState("");

  const [testDescription, setTestDescription] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  const questionAdded = useSelector((state) => state.testReducer.questions);

  const testAddedSuccesfully = useSelector(
    (state) => state.testReducer.addTestSuccesMsg
  );

  const dispatch = useDispatch();

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

  const handleOpenDeleteModal = (index) => {
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const Displaylevel = (level) => {
    switch (level) {
      case 10:
        return "Débutant";
      case 20:
        return "Intermédiare";
      case 30:
        return "Professionnel";
    }
  };

  const Displaytype = (questionType) => {
    switch (questionType) {
      case 10:
        return "Question Choix Multiple";
      case 20:
        return "Text";
      case 30:
        return "Programmation";
      case 40:
        return "Correction du code";
    }
  };

  const totalPoints = () => {
    let testPoints = 0;
    questionAdded.map((item) => {
      testPoints += parseInt(item.points);
    });
    return testPoints;
  };

  const totalDuration = () => {
    let testDuration = 0;
    questionAdded.map((item) => {
      testDuration += parseInt(item.duration);
    });
    return testDuration;
  };

  const calculLevel = () => {
    let testLevel = 0;
    questionAdded.map((item) => {
      testLevel += item.level;
    });
    let x = Math.round(testLevel / questionAdded.length / 10);
    let level = x * 10;
    return Displaylevel(level);
  };

  useEffect(() => {
    if (testAddedSuccesfully !== "") {
      setSuccessMsg("Test Ajouté avec succés !");
      setOpenAlert(true);
      dispatch(clearTest());
      dispatch(setAddingTestSuccesMsg(""));
    }
  }, [testAddedSuccesfully]);

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
          <div {...props} id="track-scrollbar" className="track-vertical" />
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
                `${path.replace("/addtest", "")}/qcmtest${
                  questionType === 10 ? "?isQcm=true" : ""
                }`
              )
            }
          >
            Créer
          </Button>
        </div>
      </Scrollbars>
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
              value={testName}
              onChange={(event) => setTestName(event.target.value)}
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
              value={testDescription}
              onChange={(event) => setTestDescription(event.target.value)}
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
            <div
              {...props}
              id="track-scrollbar-testModal"
              className="track-vertical"
            />
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
                value={testName}
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
                value={testDescription}
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
                <Typography variant="subtitle1">{totalPoints()}</Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  Durée :
                </Typography>
                <Typography variant="subtitle1">
                  {totalDuration()} min
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  Difficulté :
                </Typography>
                <Typography variant="subtitle1">{calculLevel()}</Typography>
              </div>
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
                onClick={() => {
                  dispatch(
                    addTest("addTest", {
                      testDescription,
                      testName,
                      questionAdded,
                    })
                  );
                }}
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

  const deleteModal = (
    <div className={classes.paper} style={{ width: 600, height: 350 }}>
      <div className="modal_header" style={{ backgroundColor: "red" }}>
        <DeleteIcon color="secondary" />
        <Typography id="modal_title">Suppression Test</Typography>
      </div>
      <div style={{ display: "flex" }}>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          Voulez-vous vraiment supprimer cette question ?
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          marginBottom: 20,
        }}
      >
        <Button
          variant="outlined"
          style={{
            fontWeight: "bold",
            textTransform: "none",
            width: 178,
            height: 57,
            borderRadius: 14,
            borderColor: "red",
            borderWidth: 1,
          }}
          onClick={() => handleCloseDeleteModal()}
        >
          Annuler
        </Button>
        <Button
          style={{
            fontWeight: "bold",
            textTransform: "none",
            width: 178,
            height: 57,
            borderRadius: 14,
            backgroundColor: "red",
            color: "white",
          }}
          onClick={() => {
            dispatch(deleteQuestion(selectedItem));
            setSelectedItem(0);
            handleCloseDeleteModal();
          }}
        >
          Supprimer
        </Button>
      </div>
    </div>
  );
  return questionAdded.length > 0 ? (
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
          paddingLeft: 30,
          paddingRight: 30,
          paddingBottom: 20,
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
        }}
        renderTrackVertical={(props) => (
          <div {...props} className="track-vertical" />
        )}
        renderThumbVertical={(props) => (
          <div {...props} className="thumb-vertical" />
        )}
      >
        <div style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 10 }}>
          {questionAdded.map((item, index) => (
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: 60,
                width: "100%",
                marginBottom: 30,
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
                  {index + 1}
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
                  {Displaytype(item.questionType)}
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
                  {item.points}
                </Typography>
                <Typography
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    width: "15%",
                    textAlign: "center",
                  }}
                >
                  {Displaylevel(item.level)}
                </Typography>
                <div
                  style={{
                    width: "15%",
                    justifyContent: "space-around",
                    display: "flex",
                  }}
                >
                  <IconButton
                    onClick={() => {
                      history.push(
                        `${path.replace(
                          "/addtest",
                          `/qcmtest?id=${index}${
                            item?.questionType === 10 ? "&isQcm=true" : ""
                          }`
                        )}`
                      );
                    }}
                  >
                    <EditIcon style={{ color: "black" }} />
                  </IconButton>
                  <IconButton>
                    <FileCopyIcon
                      style={{ color: "black" }}
                      onClick={() => {
                        dispatch(
                          addQuestion({
                            question: item.question,
                            answers: item.answers,
                            points: item.points,
                            duration: item.duration,
                            level: item.level,
                            questionType: item.questionType,
                          })
                        );
                      }}
                    />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleOpenDeleteModal();
                      setSelectedItem(index);
                    }}
                  >
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
        <Modal
          open={openDeleteModal}
          onClose={handleCloseDeleteModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className={classes.modal}
        >
          {deleteModal}
        </Modal>
      </div>
    </div>
  ) : (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <Collapse in={openAlert}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {successMsg}
        </Alert>
      </Collapse>
      <EmptyTest />
    </div>
  );
}
