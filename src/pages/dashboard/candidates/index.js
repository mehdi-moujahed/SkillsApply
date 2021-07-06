import React, { useEffect } from "react";
import { useState } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import CloseIcon from "@material-ui/icons/Close";
import {
  Box,
  Typography,
  withStyles,
  Button,
  SwipeableDrawer,
  TextField,
  makeStyles,
  Modal,
  FormControl,
  MenuItem,
  Select,
  IconButton,
  Collapse,
  Avatar,
} from "@material-ui/core";
import { Alert, Rating } from "@material-ui/lab";
import CircleIcon from "@material-ui/icons/FiberManualRecordRounded";
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
  deleteCandidate,
  getAllCandidates,
  setAddingCandidateErrorMsg,
  setAddingCandidateSuccesMsg,
  updateCandidateAPI,
} from "../../../store/action";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import moment from "moment";
import DeleteIcon from "@material-ui/icons/Delete";
import { setDeleteMSg } from "../../../store/action";
import { setUpdateMsg } from "../../../store/action/candidate";

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

const StyledRating = withStyles({
  iconFilled: {
    color: "#008288",
  },
  iconHover: {
    color: "#008288",
  },
})(Rating);

export default function DashboardCandidates() {
  const classes = useStyles();

  const [state, setState] = useState({
    right: false,
    candidatesNbr: 5,
  });

  const [formRegister, setFormRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    birthDate: new Date(),
    diploma: 10,
  });

  const [drawerProfile, setDrawerProfile] = useState(false);

  const [candidateName, setCandidateName] = useState("");

  const [diploma, setDiploma] = useState(50);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [openModal, setOpenModal] = useState(false);

  const [nextPage, setNextPage] = useState(true);

  const [openAlert, setOpenAlert] = useState(false);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [candidateID, setCandidateID] = useState("");

  const [candidateIndex, setCandidateIndex] = useState(null);

  const candidateAddedSuccesfully = useSelector(
    (state) => state.candidateReducer.addCandidateSuccessMsg
  );

  const candidateModifiedSuccesfully = useSelector(
    (state) => state.candidateReducer.updateCandidateSuccesMsg
  );

  const candidateAddedError = useSelector(
    (state) => state.candidateReducer.addCandidateErrorMsg
  );

  const candidates = useSelector((state) => state.candidateReducer.candidates);

  const totalPages = useSelector(
    (state) => state.candidateReducer.pagination.totalPages
  );

  const candidateDeleted = useSelector(
    (state) => state.candidateReducer.deleteCandidateSuccesMsg
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

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
    setCandidateID(null);
  };

  const handleDateChange = (date) => {
    setFormRegister({ ...formRegister, birthDate: date });
  };

  const deleteModal = (
    <div
      className={classes.paper}
      style={{
        width: 600,
        height: 350,
      }}
    >
      <div className="modal_header" style={{ backgroundColor: "red" }}>
        <DeleteIcon color="secondary" />
        <Typography id="modal_title">Suppression Candidat</Typography>
      </div>
      <div style={{ display: "flex" }}>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          Voulez-vous vraiment supprimer ce candidat ?
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
          onClick={() => setOpenDeleteModal(false)}
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
            dispatch(deleteCandidate("deleteCandidate", candidateID));
            handleCloseDeleteModal();
          }}
        >
          Supprimer
        </Button>
      </div>
    </div>
  );

  useEffect(() => {
    if (candidateAddedSuccesfully !== "") {
      setOpenAlert(true);
    }
    if (candidateAddedError !== "") {
      setOpenAlert(true);
    }
  }, [candidateAddedSuccesfully, candidateAddedError]);

  useEffect(() => {
    if (candidateDeleted !== "") {
      dispatch(setDeleteMSg(""));
    }
    if (candidateModifiedSuccesfully !== "") {
      dispatch(setUpdateMsg(""));
    }
  }, [candidateDeleted, candidateModifiedSuccesfully]);

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
    candidateDeleted,
    candidateModifiedSuccesfully,
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

  const defaultProps = {
    bgcolor: "background.paper",
    m: 1,
    border: 4,
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const toggleDrawerProfile = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerProfile(open);
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

  const candidateProfileHandler = () => {
    setState({ ...state, right: false });
    setDrawerProfile(true);
  };

  const testHistoryHandler = () => {
    setDrawerProfile(false);
    setState({ ...state, right: true });
  };

  const candidateDrawer = (anchor) => (
    <div className="drawer_main_container">
      <CancelIcon
        onClick={toggleDrawer(anchor, false)}
        id="cancelIcon_drawer"
      />

      <img src="../rectangle-drawer.png" id="rectangle-drawer" alt="" />
      <div className="drawer_container" onKeyDown={toggleDrawer(anchor, false)}>
        <div className="candidateDrawer_header">
          <div className="candidateDrawer_name_container">
            <img src="../hairstyle-logo.png" alt="hairStryle" />
            <Typography variant="h5" id="candidateDrawer_name">
              Mehdi Moujahed
            </Typography>
          </div>
          <Typography id="betterThan_text">
            Mieux que <br />
            <Typography
              color="primary"
              variant="h6"
              style={{ fontWeight: "bold" }}
            >
              97%
            </Typography>
            des développeurs
          </Typography>
        </div>
        <div className="candidateDrawer_second_container">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="../react-logo.png" alt="" />
            <p id="candidateDrawer_technology">React JS</p>
          </div>
          <Box className="candidateDrawer_box" boxShadow={5}>
            {[1, 2, 3, 4].map(() => (
              <div className="candidateDrawer_box_container">
                <Typography id="candidateDrawer_box_title" color="primary">
                  Manipluer le DOM
                </Typography>
                <Box borderColor="transparent">
                  <StyledRating
                    readOnly
                    name="customized-color"
                    defaultValue={2}
                    getLabelText={(value) =>
                      `${value} Heart${value !== 1 ? "s" : ""}`
                    }
                    icon={<CircleIcon fontSize="inherit" />}
                  />
                </Box>
                <Typography style={{ fontSize: 16, fontWeight: "900" }}>
                  60/100
                </Typography>
              </div>
            ))}
          </Box>
          <div className="candidateDrawer_score_container">
            <div id="candidateDrawer_score">
              <Typography id="candidateDrawer_score_font">
                Note du candidat
              </Typography>
              <div className="candidateDrawer_score_value">
                <Typography id="candidateDrawer_score_font" color="primary">
                  280
                </Typography>
                <Typography id="candidateDrawer_score_font">/ 240</Typography>
                <div id="candidate_score">
                  <Typography color="secondary" id="candidate_score_value">
                    70%
                  </Typography>
                </div>
              </div>
            </div>
            <div id="candidateDrawer_score">
              <Typography id="candidateDrawer_score_font">
                Durée passée
              </Typography>
              <div id="test_duration_container">
                <Typography color="primary" id="candidateDrawer_score_font">
                  1h
                </Typography>
                <Typography id="candidateDrawer_score_font">/ 1h30</Typography>
              </div>
            </div>
          </div>
          <div className="candidateDrawer_button_container">
            <Button variant="outlined" id="candidateDrawer_button">
              Voir les réponses
            </Button>
            <Button
              variant="outlined"
              id="candidateDrawer_button"
              onClick={candidateProfileHandler}
            >
              Profil du candidat
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const profileDrawer = (anchor) => (
    <div className="drawer_main_container">
      <CancelIcon
        onClick={() => {
          setDrawerProfile(false);
          setCandidateIndex(null);
        }}
        id="cancelIcon_drawer"
      />

      <img src="../rectangle-drawer.png" id="rectangle-drawer" alt="" />

      <Scrollbars
        className="profileDrawer_scrollbar"
        renderTrackVertical={(props) => (
          <div {...props} className="track-vertical" />
        )}
        renderThumbVertical={(props) => (
          <div {...props} className="thumb-vertical" />
        )}
      >
        <div
          className="drawer_container"
          onKeyDown={() => {
            setDrawerProfile(false);
            setCandidateIndex(null);
          }}
        >
          <div id="profileDrawer_header">
            <Box
              display="flex"
              justifyContent="center"
              borderColor="#008288"
              {...defaultProps}
              id="profileDrawer_pic_box"
            >
              <Avatar
                style={{
                  height: 115,
                  width: 115,
                  borderRadius: 75,
                  backgroundColor: "#262626",
                  fontSize: 40,
                }}
              >
                {candidates[candidateIndex]?.firstName
                  .substring(0, 1)
                  .toUpperCase()}
              </Avatar>
            </Box>
          </div>
          <Box className="profileDrawer_candidate_box" boxShadow={5}>
            <div className="profileDrawer_name_container">
              <Typography variant="h5" id="profileDrawer_name_font">
                Nom :
              </Typography>
              <Typography variant="h6" id="profileDrawer_lastName">
                {candidates[candidateIndex]?.lastName}
              </Typography>
            </div>
            <div className="profileDrawer_name_container">
              <Typography variant="h5" id="profileDrawer_name_font">
                Prénom :
              </Typography>
              <Typography variant="h6" id="profileDrawer_lastName">
                {candidates[candidateIndex]?.firstName}
              </Typography>
            </div>
            <div className="profileDrawer_name_container">
              <Typography variant="h5" id="profileDrawer_name_font">
                Adresse Mail :
              </Typography>
              <Typography variant="h6" id="profileDrawer_lastName">
                {candidates[candidateIndex]?.email}
              </Typography>
            </div>
          </Box>
          <div className="profilDrawer_testHistory">
            <Typography id="profilDrawer_testHistory_title">
              Historique des tests
            </Typography>

            {[1, 2, 3, 4, 5, 6, 7].map(() => (
              <CustomBar
                testImg="../me.jpg"
                testName="Mehdi Moujahed"
                duration="30min"
                score="4/5"
                width="100%"
                buttonLabel="Plus de détails"
                onClick={testHistoryHandler}
                testBar={false}
                buttonStyle={{ width: "29%", marginLeft: 13, marginRight: 11 }}
              ></CustomBar>
            ))}
          </div>
        </div>
      </Scrollbars>
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
            {candidates.length > 0 ? (
              candidates.map((item, index) => (
                <CustomBar
                  testName={item.firstName + " " + item.lastName}
                  buttonLabel="Plus de détails"
                  onClick={() => {
                    setCandidateIndex(index);
                    setDrawerProfile(true);
                  }}
                  testBar={false}
                  editable
                  candidate
                  candidateEmail={item.email}
                  onClickDelete={() => {
                    setOpenDeleteModal(true);
                    setCandidateID(item.id);
                  }}
                  onClickEdit={() => {
                    setOpenModal(true);
                    setCandidateIndex(index);
                    setCandidateID(item.id);
                    setFormRegister({
                      ...formRegister,
                      firstName: candidates[index]?.firstName,
                      lastName: candidates[index]?.lastName,
                      email: candidates[index]?.email,
                      phoneNumber: candidates[index]?.phoneNumber,
                      birthDate: candidates[index]?.birthDate,
                      diploma: candidates[index]?.diploma,
                    });
                  }}
                ></CustomBar>
              ))
            ) : (
              <div id="no_result_container">
                <Typography color="primary" id="no_result_text">
                  Aucun candidat disponible !
                </Typography>
                <img src="../empty-tests.png" alt="empty tests" />
              </div>
            )}
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
        <div>
          <SwipeableDrawer
            anchor="right"
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
          >
            {candidateDrawer("right")}
          </SwipeableDrawer>
          <SwipeableDrawer
            anchor="right"
            open={drawerProfile}
            onClose={() => {
              setDrawerProfile(false);
              setCandidateIndex(null);
            }}
            onOpen={toggleDrawerProfile(true)}
          >
            {profileDrawer("right")}
          </SwipeableDrawer>
        </div>
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
        <Modal
          open={openDeleteModal}
          onClose={handleCloseDeleteModal}
          className={classes.modal}
        >
          {deleteModal}
        </Modal>
      </div>
    </div>
  );
}
