import {
  AppBar,
  Tab,
  Tabs,
  Typography,
  Box,
  SwipeableDrawer,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CustomBar from "../../../component/custom-bar";
import Scrollbars from "react-custom-scrollbars";
import { useDispatch, useSelector } from "react-redux";
import {
  getAvailablleTest,
  getProfessionalAvailableTests,
  getRecentAvailableTests,
} from "../../../store/action";
import moment from "moment";
import CancelIcon from "@material-ui/icons/Cancel";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import StarIcon from "@material-ui/icons/Star";
import { Button } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      <Scrollbars
        style={{
          display: "flex",
          width: "42vw",
          height: "46vh",
        }}
        renderTrackVertical={(props) => (
          <div {...props} className="track-vertical" />
        )}
        renderThumbVertical={(props) => (
          <div {...props} className="thumb-vertical" />
        )}
      >
        {value === index && children}
      </Scrollbars>
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function TestTab(props) {
  const { testTab, setTestTab } = props;

  const testTabhandleChange = (event, newValue) => {
    setTestTab(newValue);
  };

  const dispatch = useDispatch();

  const newAvailableTests = useSelector(
    (state) => state.testReducer.newAvailableTests
  );
  const bestAvailableTests = useSelector(
    (state) => state.testReducer.bestAvailableTests
  );
  const popularAvailableTests = useSelector(
    (state) => state.testReducer.popularAvailableTests
  );

  const [state, setState] = useState({
    right: false,
    newtestAvailableIndex: 0,
    besttestAvailableIndex: 0,
    populartestAvailableIndex: 0,
  });

  useEffect(() => {
    dispatch(getRecentAvailableTests("getRecentAvailableTests", 0, 4, true));
    dispatch(getRecentAvailableTests("getRecentAvailableTests", 0, 4, false));
    dispatch(
      getProfessionalAvailableTests("getProfessionalAvailableTests", 0, 4, 30)
    );
  }, []);

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

  const drawer = (anchor) => (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: 579,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
      }}
    >
      <CancelIcon
        onClick={toggleDrawer(anchor, false)}
        style={{
          position: "absolute",
          color: "white",
          top: 16,
          left: 14,
          fontSize: 30,
          cursor: "pointer",
        }}
      />
      <img
        src="../rectangle-drawer.png"
        style={{ height: "100%", width: 60 }}
        alt=""
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        role="presentation"
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="../react-logo.png" alt="test-logo" />
          <p style={{ fontSize: 36, paddingLeft: 25, fontWeight: "bold" }}>
            {testTab === "one"
              ? newAvailableTests[state.newtestAvailableIndex]?.name
              : testTab === "two"
              ? bestAvailableTests[state.besttestAvailableIndex]?.name
              : popularAvailableTests[state.populartestAvailableIndex]?.name}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p style={{ fontSize: 30, fontWeight: "bold", marginBottom: 0 }}>
            Description :
          </p>
          <p style={{ fontSize: 20, fontWeight: "bold" }}>
            {testTab === "one"
              ? newAvailableTests[state.newtestAvailableIndex]?.description
              : testTab === "two"
              ? bestAvailableTests[state.besttestAvailableIndex]?.description
              : popularAvailableTests[state.populartestAvailableIndex]
                  ?.description}
          </p>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <p style={{ fontSize: 30, fontWeight: "bold" }}>Information :</p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {[
              { img: "../score-logo.png", imgLabel: "4 Etapes" },
              { img: "../question-logo.png", imgLabel: "30 Excercices" },
              { img: "../trophy-logo.png", imgLabel: "3 Niveaux" },
            ].map((item) => (
              <Box
                boxShadow={10}
                style={{
                  height: 130,
                  width: 119,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={item.img} style={{ height: 60, width: 60 }} alt="" />
                <p style={{ fontSize: 15, fontWeight: "bold" }}>
                  {item.imgLabel}
                </p>
              </Box>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "88%",
            flex: 1,
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography style={{ fontSize: 22, fontWeight: "bold" }}>
              Durée :
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <WatchLaterIcon />
              <Typography style={{ marginTop: 5, marginLeft: 5 }}>
                {testTab === "one"
                  ? newAvailableTests[state.newtestAvailableIndex]?.duration +
                    " min"
                  : testTab === "two"
                  ? bestAvailableTests[state.besttestAvailableIndex]?.duration +
                    " min"
                  : popularAvailableTests[state.populartestAvailableIndex]
                      ?.duration + " min"}
              </Typography>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography style={{ fontSize: 22, fontWeight: "bold" }}>
              Note :
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <StarIcon />
              <Typography style={{ marginTop: 5 }}>
                {testTab === "one"
                  ? newAvailableTests[state.newtestAvailableIndex]?.rate
                  : testTab === "two"
                  ? bestAvailableTests[state.besttestAvailableIndex]?.rate
                  : popularAvailableTests[state.populartestAvailableIndex]
                      ?.rate}
              </Typography>
            </div>
          </div>
        </div>
        <div>
          <Button id="assign_test_button" variant="outlined">
            Inviter un candidat
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <AppBar
        position="static"
        id="tab_appBar"
        // style={{ backgroundColor: "white", boxShadow: "none" }}
        className="tabAppBar"
      >
        <Tabs
          value={testTab}
          onChange={testTabhandleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab
            value="one"
            label="Les nouveaux"
            wrapped
            {...a11yProps("one")}
            style={{
              textTransform: "none",
              fontSize: 16,
              color: "black",
              fontWeight: "bold",
            }}
          />
          <Tab
            value="two"
            label="Les plus notés"
            {...a11yProps("two")}
            style={{
              textTransform: "none",
              fontSize: 16,
              color: "black",
              fontWeight: "bold",
            }}
          />
          <Tab
            value="three"
            label="Les plus professionnels"
            {...a11yProps("three")}
            style={{
              textTransform: "none",
              fontSize: 16,
              color: "black",
              fontWeight: "bold",
            }}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={testTab} index="one">
        {newAvailableTests.length > 0 ? (
          newAvailableTests.map((item, index) => (
            <CustomBar
              testName={item.name}
              duration={item.duration + " min"}
              score={item.rate}
              buttonLabel="Afficher le test"
              width="40vw"
              onClick={() => {
                setState({
                  ...state,
                  right: true,
                  newtestAvailableIndex: index,
                });
              }}
              testBar
            ></CustomBar>
          ))
        ) : (
          <div id="no_result_container">
            <Typography color="primary" id="no_result_text">
              Aucun test disponible !
            </Typography>
            <img src="../empty-tests.png" alt="empty tests" />
          </div>
        )}
      </TabPanel>
      <TabPanel value={testTab} index="two">
        {bestAvailableTests.length > 0 ? (
          bestAvailableTests.map((item, index) => (
            <CustomBar
              testName={item.name}
              duration={item.duration + " min"}
              score={item.rate}
              buttonLabel="Afficher le test"
              width="40vw"
              onClick={() => {
                setState({
                  ...state,
                  right: true,
                  besttestAvailableIndex: index,
                });
              }}
              testBar
            ></CustomBar>
          ))
        ) : (
          <div id="no_result_container">
            <Typography color="primary" id="no_result_text">
              Aucun test disponible !
            </Typography>
            <img src="../empty-tests.png" alt="empty tests" />
          </div>
        )}
      </TabPanel>
      <TabPanel value={testTab} index="three">
        {popularAvailableTests.length > 0 ? (
          popularAvailableTests.map((item, index) => (
            <CustomBar
              testName={item.name}
              duration={item.duration + " min"}
              score={item.rate}
              buttonLabel="Afficher le test"
              width="40vw"
              onClick={() => {
                setState({
                  ...state,
                  right: true,
                  populartestAvailableIndex: index,
                });
              }}
              testBar
            ></CustomBar>
          ))
        ) : (
          <div id="no_result_container">
            <Typography color="primary" id="no_result_text">
              Aucun test disponible !
            </Typography>
            <img src="../empty-tests.png" alt="empty tests" />
          </div>
        )}
      </TabPanel>
      <SwipeableDrawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {drawer("right")}
      </SwipeableDrawer>
    </div>
  );
}
