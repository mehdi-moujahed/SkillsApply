import {
  AppBar,
  Box,
  Button,
  Icon,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PropTypes from "prop-types";
import "./style.css";
import TestTab from "./testTab";
import TestPassedTab from "./testPassedTab";

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
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function DashboardHome() {
  const classes = useStyles();

  const [mainTab, setmainTab] = React.useState("one");

  const [testTab, setTestTab] = React.useState("one");

  const [testPassedTab, setTestPassedTab] = React.useState("one");

  const handleChange = (event, newValue) => {
    setmainTab(newValue);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<AddCircleIcon style={{ color: "white" }} />}
            style={{
              width: 285,
              height: 75,
              borderRadius: 15,
              textTransform: "none",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Ajouter un nouveau test
          </Button>
          <img
            src="../premuim-pack-logo.png"
            alt="premuim pack logo"
            style={{ marginLeft: 20 }}
          />
          <Typography style={{ fontSize: 15, fontWeight: "bold" }}>
            Premium Pack member
          </Typography>
        </div>
        <div style={{ display: "flex", marginTop: 50 }}>
          <div className={classes.root}>
            <AppBar
              position="static"
              id="tab_appBar"
              // style={{ backgroundColor: "white", boxShadow: "none" }}
              className="tabAppBar"
            >
              <Tabs
                value={mainTab}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
              >
                <Tab
                  value="one"
                  label="Tests disponibles"
                  wrapped
                  {...a11yProps("one")}
                  style={{
                    textTransform: "none",
                    fontSize: 20,
                    color: "black",
                    fontWeight: "bold",
                  }}
                />
                <Tab
                  value="two"
                  label="Tests passés"
                  {...a11yProps("two")}
                  style={{
                    textTransform: "none",
                    fontSize: 20,
                    color: "black",
                    fontWeight: "bold",
                  }}
                />
              </Tabs>
            </AppBar>
            <TabPanel value={mainTab} index="one">
              <TestTab
                testTab={testTab}
                setTestTab={(value) => setTestTab(value)}
              />
            </TabPanel>
            <TabPanel value={mainTab} index="two">
              <TestPassedTab
                testPassedTab={testPassedTab}
                setTestPassedTab={(value) => setTestPassedTab(value)}
              />
            </TabPanel>
            {/* <TabPanel value={value} index="three">
              Item Three
            </TabPanel> */}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          {[1, 2, 3].map(() => (
            <Box
              style={{
                height: 130,
                width: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
              }}
              boxShadow={5}
            >
              <Typography style={{ fontSize: 55, fontWeight: "900" }}>
                69
              </Typography>
              <Typography
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Tests Obtenus
              </Typography>
            </Box>
          ))}
        </div>
      </div>
    </div>
  );
}
