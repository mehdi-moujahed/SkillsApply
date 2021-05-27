import React, { useState } from "react";
import SearchSortFilter from "../../../component/searchsortfilter";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import StarIcon from "@material-ui/icons/Star";
import {
  AppBar,
  Box,
  Button,
  SwipeableDrawer,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import "./style.css";
import Scrollbars from "react-custom-scrollbars";
import CancelIcon from "@material-ui/icons/Cancel";
import PropTypes from "prop-types";
import CustomBar from "../../../component/custom-bar";
import { TabPanel } from "@material-ui/lab";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useHistory, useRouteMatch } from "react-router";

export default function DashboardTests() {
  let { path } = useRouteMatch();

  const history = useHistory();

  const [state, setState] = useState({
    right: false,
  });

  const [mainTab, setmainTab] = useState("one");

  const handleChange = (event, newValue) => {
    setmainTab(newValue);
  };

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
            width: "47vw",
            height: "69vh",
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

  const list = (anchor) => (
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
          // backgroundColor: "red",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="../react-logo.png" alt=""/>
          <p style={{ fontSize: 36, paddingLeft: 25, fontWeight: "bold" }}>
            React JS
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // marginLeft: 80,
          }}
        >
          <p style={{ fontSize: 30, fontWeight: "bold", marginBottom: 0 }}>
            Description :
          </p>
          <p style={{ fontSize: 20, fontWeight: "bold" }}>
            React est une bibliothèque JavaScript libre développée par Facebook
            depuis 2013. Le but principal de cette bibliothèque est de faciliter
            la création d'application web monopage, via la création de
            composants dépendant d'un état et générant une page HTML à chaque
            changement d'état.
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
                <img src={item.img} style={{ height: 60, width: 60 }} alt=""/>
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
                1h 30min
              </Typography>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography style={{ fontSize: 22, fontWeight: "bold" }}>
              Note :
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <StarIcon />
              <Typography style={{ marginTop: 5 }}>4/5</Typography>
            </div>
          </div>
        </div>
        <div>
          <Button id="assign_test_button" variant="outlined">
            Ajouter un candidat
          </Button>
        </div>
      </div>
    </div>
  );
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="tests_main_container">
        <AppBar position="static" id="tab_appBar" className="tabAppBar">
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
              label="Tests crées"
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
          {[1, 2, 3].map(() => (
            <CustomBar
              testImg="../react-logo.png"
              testName="React JS"
              duration="1h 30min"
              score="4/5"
              buttonLabel="Afficher le test"
              onClick={toggleDrawer("right", true)}
              testBar
            ></CustomBar>
          ))}
        </TabPanel>
        <TabPanel value={mainTab} index="two">
          {[1, 2, 3, 4, 5, 6, 7].map(() => (
            <CustomBar
              testImg="../react-logo.png"
              testName="React JS"
              duration="1h 30min"
              score="4/5"
              buttonLabel="Afficher le test"
              onClick={toggleDrawer("right", true)}
              testBar
            ></CustomBar>
          ))}
        </TabPanel>
      </div>
      <div className="search_container">
        <div>
          <SwipeableDrawer
            anchor="right"
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
          >
            {list("right")}
          </SwipeableDrawer>
        </div>
        <Button
          id="add_new_test"
          variant="outlined"
          endIcon={<AddCircleIcon />}
          onClick={() => history.push(`${path.replace("/tests", "")}/addtest`)}
        >
          Ajouter un nouveau test
        </Button>
        <SearchSortFilter
          searchTitle="Rechercher votre test préféré"
          testPage
        />
      </div>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
