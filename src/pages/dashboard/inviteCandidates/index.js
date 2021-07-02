import React, { useEffect } from "react";
import { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import {
  Typography,
  Button,
  TextField,
  makeStyles,
  Modal,
  FormControl,
  MenuItem,
  Select,
  IconButton,
  Collapse,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Scrollbars from "react-custom-scrollbars";
import CustomBar from "../../../component/custom-bar";
import SearchSortFilter from "../../../component/searchsortfilter";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Pagination from "@material-ui/lab/Pagination";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {
  candidateRegister,
  getAllCandidates,
  inviteCandidate,
  setAddingCandidateErrorMsg,
  setAddingCandidateSuccesMsg,
  updateCandidateAPI,
  setInvitationMailErrorMsg,
  setInvitationMailSuccessMsg,
} from "../../../store/action";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import moment from "moment";
import { useLocation } from "react-router-dom";

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

export default function InviteCandidates() {
  const classes = useStyles();

  const [state, setState] = useState({
    right: false,
    candidatesNbr: 5,
  });

  const location = useLocation();

  const testID = new URLSearchParams(location.search).get("id");

  const [formRegister, setFormRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    birthDate: new Date(),
    diploma: 10,
  });

  const [candidateName, setCandidateName] = useState("");

  const [diploma, setDiploma] = useState(50);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [openModal, setOpenModal] = useState(false);

  const [nextPage, setNextPage] = useState(true);

  const [openAlert, setOpenAlert] = useState(false);

  const [openAlertMail, setOpenAlertMail] = useState(false);

  const [candidateID, setCandidateID] = useState("");

  const [candidateIndex, setCandidateIndex] = useState(null);

  const candidateAddedSuccesfully = useSelector(
    (state) => state.candidateReducer.addCandidateSuccessMsg
  );

  const invitationMailSendSuccesfully = useSelector(
    (state) => state.candidateReducer.invitationMailSuccessMsg
  );
  const invitationMailSendError = useSelector(
    (state) => state.candidateReducer.invitationMailErrorMsg
  );

  const candidateAddedError = useSelector(
    (state) => state.candidateReducer.addCandidateErrorMsg
  );

  const candidates = useSelector((state) => state.candidateReducer.candidates);

  const totalPages = useSelector(
    (state) => state.candidateReducer.pagination.totalPages
  );

  const currentPage = useSelector(
    (state) => state.candidateReducer.pagination.currentPage
  );

  const handleChangeFormRegister = (prop) => (event) => {
    setFormRegister({ ...formRegister, [prop]: event.target.value });
  };

  const dispatch = useDispatch();

  const handleClose = () => {
    setOpenModal(false);
    setFormRegister({
      ...formRegister,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      birthDate: new Date(),
      diploma: 10,
    });
    setNextPage(true);
    setCandidateIndex(null);
    setCandidateID(null);
  };

  const handleDateChange = (date) => {
    setFormRegister({ ...formRegister, birthDate: date });
  };

  useEffect(() => {
    if (candidateAddedSuccesfully !== "") {
      setOpenAlert(true);
    }
    if (candidateAddedError !== "") {
      setOpenAlert(true);
    }
    if (invitationMailSendSuccesfully !== "") {
      setOpenAlertMail(true);
    }
    if (invitationMailSendError !== "") {
      setOpenAlertMail(true);
    }
  }, [
    candidateAddedSuccesfully,
    candidateAddedError,
    invitationMailSendSuccesfully,
    invitationMailSendError,
  ]);

  useEffect(() => {
    if (openAlert === false) {
      dispatch(setInvitationMailSuccessMsg(""));
      dispatch(setInvitationMailErrorMsg(""));
    }
  }, [openAlert]);

  useEffect(() => {
    dispatch(
      getAllCandidates(
        "getAllCandidates",
        "60a79878a0784e4240d4a619",
        0,
        state.candidatesNbr,
        candidateName,
        diploma,
        moment(selectedDate).add(1, "days").format("yyyy-MM-DD").toString()
      )
    );
  }, [
    candidateAddedSuccesfully,
    state.candidatesNbr,
    candidateName,
    diploma,
    selectedDate,
  ]);

  const addCandidate = () => {
    dispatch(candidateRegister("candidateSignup", formRegister));
    setOpenModal(false);
    setFormRegister({
      ...formRegister,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      birthDate: new Date(),
      diploma: 10,
    });
  };

  const updateCandidate = () => {
    dispatch(updateCandidateAPI("updateCandidate", candidateID, formRegister));
    setOpenModal(false);
    setFormRegister({
      ...formRegister,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      birthDate: new Date(),
      diploma: 10,
    });
  };

  const candidateModal = (
    <div className={classes.paper}>
      <div className="modal_header">
        <PersonAddIcon color="secondary" />
        <Typography id="modal_title">Ajouter un Candidat</Typography>
      </div>
      {nextPage ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            height: "90%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h6">Nom :</Typography>
            <TextField
              id="outlined-multiline-static"
              variant="outlined"
              value={formRegister.lastName}
              onChange={handleChangeFormRegister("lastName")}
              style={{ width: 465, paddingTop: 10 }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h6">Prénom :</Typography>
            <TextField
              id="outlined-multiline-static"
              variant="outlined"
              value={formRegister.firstName}
              onChange={handleChangeFormRegister("firstName")}
              style={{ width: 465, paddingTop: 10 }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h6">Email :</Typography>
            <TextField
              onChange={handleChangeFormRegister("email")}
              id="outlined-multiline-static"
              variant="outlined"
              value={formRegister.email}
              style={{ width: 465, paddingTop: 10 }}
            />
          </div>
          <div>
            <Button
              variant="outlined"
              style={{ marginBottom: 25 }}
              color="primary"
              id="modal_button"
              onClick={() => setNextPage(false)}
            >
              Continuer
            </Button>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            height: "90%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h6">Numéro de téléphone :</Typography>
            <TextField
              id="outlined-multiline-static"
              variant="outlined"
              value={formRegister?.phoneNumber}
              onChange={handleChangeFormRegister("phoneNumber")}
              style={{ width: 465, paddingTop: 10 }}
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <Typography variant="h6">Date de naissance :</Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                id="date-picker-dialog"
                format="dd/MM/yyyy"
                value={formRegister?.birthDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                color="primary"
              />
            </MuiPickersUtilsProvider>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h6">Niveau d'étude :</Typography>
            <FormControl variant="outlined">
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={formRegister?.diploma}
                onChange={handleChangeFormRegister("diploma")}
                style={{ width: 465, height: 50 }}
              >
                <MenuItem value={10}>Licence</MenuItem>
                <MenuItem value={20}>Master</MenuItem>
                <MenuItem value={30}>Ingénieur</MenuItem>
                <MenuItem value={40}>Autre</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <Button
              variant="outlined"
              id="edit_button"
              color="primary"
              style={{ marginBottom: 25 }}
              onClick={() => setNextPage(true)}
            >
              Retour
            </Button>
            <Button
              variant="outlined"
              style={{ marginBottom: 25 }}
              color="primary"
              id="modal_button"
              onClick={candidateIndex !== null ? updateCandidate : addCandidate}
            >
              {candidateIndex !== null ? "Modifier" : "Terminer"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="candidate_main_container">
      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
        <Collapse in={openAlert}>
          <Alert
            severity={candidateAddedSuccesfully !== "" ? "success" : "error"}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpenAlert(false);
                  dispatch(setAddingCandidateErrorMsg(""));
                  dispatch(setAddingCandidateSuccesMsg(""));
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {candidateAddedSuccesfully !== ""
              ? candidateAddedSuccesfully
              : candidateAddedError}
          </Alert>
        </Collapse>
        <Collapse in={openAlertMail}>
          <Alert
            severity={
              invitationMailSendSuccesfully !== "" ? "success" : "error"
            }
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpenAlertMail(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {invitationMailSendSuccesfully !== ""
              ? invitationMailSendSuccesfully
              : invitationMailSendError}
          </Alert>
        </Collapse>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignSelf: "flex-end",
            paddingBottom: 10,
          }}
        >
          <Typography
            variant="subtitle1"
            style={{ color: "black", paddingRight: 10 }}
          >
            Candidats par page
          </Typography>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.candidatesNbr}
            onChange={(event) =>
              setState({
                ...state,
                candidatesNbr: event.target.value,
              })
            }
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </div>
        <Scrollbars
          style={{
            display: "flex",
            width: "47vw",
            height: "65vh",
          }}
          renderTrackVertical={(props) => (
            <div {...props} className="track-vertical" />
          )}
          renderThumbVertical={(props) => (
            <div {...props} className="thumb-vertical" />
          )}
        >
          <div className="tests_main_container">
            {candidates.map((item, index) => (
              <CustomBar
                testName={item.firstName + " " + item.lastName}
                buttonLabel="Inviter"
                onClick={() => {
                  dispatch(inviteCandidate("sendTestMail", item.email, testID));
                }}
                testBar={false}
                candidate
                candidateEmail={item.email}
              ></CustomBar>
            ))}
          </div>
        </Scrollbars>
        <Pagination
          className="candidate_pagination_container"
          count={totalPages}
          page={currentPage + 1}
          boundaryCount={1}
          onChange={(event, value) => {
            setState({ ...state, pageNumber: value - 1 });
            dispatch(
              getAllCandidates(
                "getAllCandidates",
                "60a79878a0784e4240d4a619",
                value - 1,
                state.candidatesNbr,
                candidateName,
                diploma,
                moment(selectedDate)
                  .add(1, "days")
                  .format("yyyy-MM-DD")
                  .toString()
              )
            );
          }}
          variant="outlined"
          color="primary"
        />
      </div>
      <div className="candidate_search_container">
        <Button
          id="add_new_test"
          variant="outlined"
          endIcon={<AddCircleIcon />}
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Ajouter un nouveau candidat
        </Button>
        <SearchSortFilter
          testName={candidateName}
          setTestName={(value) => setCandidateName(value)}
          timeFilter={diploma}
          setTimeFilter={(value) => setDiploma(value)}
          selectedDate={selectedDate}
          setSelectedDate={(value) => setSelectedDate(value)}
          searchTitle="Rechercher Les candidats"
          candidate
          width="90%"
        />
      </div>
      <div className="modal">
        <Modal open={openModal} onClose={handleClose} className={classes.modal}>
          {candidateModal}
        </Modal>
      </div>
    </div>
  );
}
