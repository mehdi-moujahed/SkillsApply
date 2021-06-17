import { AppBar, Tab, Tabs, Typography } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import CustomBar from "../../../component/custom-bar";
import Scrollbars from "react-custom-scrollbars";

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

const data = [
  // {
  //   testImg: "../react-logo.png",
  //   testName: "React JS",
  //   duration: "1h 30min",
  //   score: "3/5",
  // },
  // {
  //   testImg: "../react-logo.png",
  //   testName: "PHP",
  //   duration: "2h 30min",
  //   score: "4/5",
  // },
  // {
  //   testImg: "../react-logo.png",
  //   testName: "React Native",
  //   duration: "1h 45min",
  //   score: "3.5/5",
  // },
  // {
  //   testImg: "../react-logo.png",
  //   testName: "JavaScript",
  //   duration: "1h 20min",
  //   score: "5/5",
  // },
];

export default function CandidateTab(props) {
  const { testPassedTab, setTestPassedTab } = props;

  const testPassedhandleChange = (event, newValue) => {
    setTestPassedTab(newValue);
  };
  return (
    <div>
      <AppBar position="static" id="tab_appBar" className="tabAppBar">
        <Tabs value={testPassedTab} onChange={testPassedhandleChange}>
          <Tab
            value="one"
            label="Les plus récents"
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
            label="Les plus notés (30 jours)"
            {...a11yProps("two")}
            style={{
              textTransform: "none",
              fontSize: 16,
              color: "black",
              fontWeight: "bold",
            }}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={testPassedTab} index="one">
        {data.length > 0 ? (
          data.map((item) => (
            <CustomBar
              testImg={item.testImg}
              testName={item.testName}
              duration={item.duration}
              score={item.score}
              buttonLabel="Afficher le test"
              width="40vw"
              // onClick={toggleDrawer("right", true)}
              testBar={false}
            ></CustomBar>
          ))
        ) : (
          <div id="no_result_container">
            <Typography color="primary" id="no_result_text">
              Aucun Test Disponible !
            </Typography>
            <img src="../empty-tests.png" alt="empty tests" />
          </div>
        )}
      </TabPanel>
      <TabPanel value={testPassedTab} index="two">
        {[1, 2, 3].map(() => (
          <CustomBar
            testImg="../me.jpg"
            testName="Mehdi Moujahed"
            duration="JavaScript"
            score="80/100"
            buttonLabel="Plus de détails"
            width="40vw"
            // onClick={toggleDrawer("right", true)}
            testBar={false}
          ></CustomBar>
        ))}
      </TabPanel>
    </div>
  );
}
