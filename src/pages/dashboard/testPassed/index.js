import { Button, SwipeableDrawer, withStyles } from "@material-ui/core";
import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import CustomBar from "../../../component/custom-bar";
import SearchSortFilter from "../../../component/searchsortfilter";
import { Box, Typography } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import Rating from "@material-ui/lab/Rating";
import CircleIcon from "@material-ui/icons/FiberManualRecordRounded";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "./style.css";

const StyledRating = withStyles({
  iconFilled: {
    color: "#008288",
  },
  iconHover: {
    color: "#008288",
  },
})(Rating);

export default function DashboardTestPassed() {
  const [state, setState] = useState({
    right: false,
  });
  const [drawerProfile, setDrawerProfile] = useState(false);

  const [testName, setTestName] = useState("");

  const [timeFilter, setTimeFilter] = useState(10);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [valueSlide, setValueSlide] = useState([0, 5]);

  const [valueSlide2, setValueSlide2] = useState([0, 5]);

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
      <CancelIcon onClick={toggleDrawerProfile(false)} id="cancelIcon_drawer" />

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
          onKeyDown={toggleDrawerProfile(false)}
        >
          <div id="profileDrawer_header">
            <Box
              display="flex"
              justifyContent="center"
              borderColor="#008288"
              {...defaultProps}
              id="profileDrawer_pic_box"
            >
              <img id="profileDrawer_pic" src="../me.jpg" alt="profile-icon" />
            </Box>
          </div>
          <Box className="profileDrawer_candidate_box" boxShadow={5}>
            <div className="profileDrawer_name_container">
              <Typography variant="h5" id="profileDrawer_name_font">
                Nom :
              </Typography>
              <Typography variant="h6" id="profileDrawer_lastName">
                Moujahed
              </Typography>
            </div>
            <div className="profileDrawer_name_container">
              <Typography variant="h5" id="profileDrawer_name_font">
                Prénom :
              </Typography>
              <Typography variant="h6" id="profileDrawer_lastName">
                Mehdi
              </Typography>
            </div>
            <div className="profileDrawer_name_container">
              <Typography variant="h5" id="profileDrawer_name_font">
                Adresse Mail :
              </Typography>
              <Typography variant="h6" id="profileDrawer_lastName">
                moujahedmehdi@gmail.com
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
                duration="1h 30min"
                score="4/5"
                width="100%"
                buttonLabel="Plus de détails"
                onClick={testHistoryHandler}
                testBar={false}
              ></CustomBar>
            ))}
          </div>
        </div>
      </Scrollbars>
    </div>
  );

  return (
    <div className="candidate_main_container">
      <Scrollbars
        style={{
          display: "flex",
          width: "47vw",
          height: "75vh",
        }}
        renderTrackVertical={(props) => (
          <div {...props} className="track-vertical" />
        )}
        renderThumbVertical={(props) => (
          <div {...props} className="thumb-vertical" />
        )}
      >
        <div className="tests_main_container">
          {[1, 2, 3, 4, 5, 6].map(() => (
            <CustomBar
              testImg="../me.jpg"
              testName="Mehdi Moujahed"
              duration="React JS"
              score="4/5"
              buttonLabel="Plus de détails"
              onClick={toggleDrawer("right", true)}
              testBar={false}
            ></CustomBar>
          ))}
        </div>
      </Scrollbars>
      <div className="search_container">
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
            onClose={toggleDrawerProfile(false)}
            onOpen={toggleDrawerProfile(true)}
          >
            {profileDrawer("right")}
          </SwipeableDrawer>
        </div>
        <SearchSortFilter
          testName={testName}
          setTestName={(value) => setTestName(value)}
          timeFilter={timeFilter}
          setTimeFilter={(value) => setTimeFilter(value)}
          selectedDate={selectedDate}
          setSelectedDate={(value) => setSelectedDate(value)}
          valueSlide={valueSlide2}
          setValueSlide={(value) => setValueSlide2(value)}
          onChange={() => setValueSlide(valueSlide2)}
          searchTitle="Rechercher Les candidats"
        />
      </div>
    </div>
  );
}
