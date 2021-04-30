import { AppBar, Box, Tab, Tabs, Typography } from "@material-ui/core";
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

export default function TestTab(props) {
  const { testTab, setTestTab } = props;

  const testTabhandleChange = (event, newValue) => {
    setTestTab(newValue);
  };

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
            label="Les plus populaires"
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
        {[1, 2, 3, 4].map(() => (
          <CustomBar
            testImg="../react-logo.png"
            testName="React JS"
            duration="1h 30min"
            score="4/5"
            buttonLabel="Afficher le test"
            width="40vw"
            // onClick={toggleDrawer("right", true)}
            testBar
          ></CustomBar>
        ))}
      </TabPanel>
      <TabPanel value={testTab} index="two">
        {[1, 2, 3].map(() => (
          <CustomBar
            testImg="../react-logo.png"
            testName="React JS"
            duration="1h 30min"
            score="4/5"
            buttonLabel="Afficher le test"
            width="40vw"
            // onClick={toggleDrawer("right", true)}
            testBar
          ></CustomBar>
        ))}
      </TabPanel>
      <TabPanel value={testTab} index="three">
        {[1, 2].map(() => (
          <CustomBar
            testImg="../react-logo.png"
            testName="React JS"
            duration="1h 30min"
            score="4/5"
            buttonLabel="Afficher le test"
            width="40vw"
            // onClick={toggleDrawer("right", true)}
            testBar
          ></CustomBar>
        ))}
      </TabPanel>
    </div>
  );
}
