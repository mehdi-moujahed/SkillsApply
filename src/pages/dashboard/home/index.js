import {
  AppBar,
  Box,
  Button,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PropTypes from "prop-types";
import "./style.css";
import TestTab from "./testTab";
import TestPassedTab from "./testPassedTab";
import { useHistory, useRouteMatch } from "react-router";
import ReactApexChart from "react-apexcharts";

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

  const history = useHistory();
  let { path } = useRouteMatch();

  const [mainTab, setmainTab] = useState("one");

  const [testTab, setTestTab] = useState("one");

  const [testPassedTab, setTestPassedTab] = useState("one");

  const [chartData, setChartData] = useState({
    series: [
      // {
      //   name: "High - 2013",
      //   data: [28, 29, 33, 36, 32, 32, 33],
      // },
      {
        name: "Low - 2013",
        data: [12, 40, 30, 20, 67, 100, 0],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#008288", "#545454"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Moyenne des candidatures par jour",
        align: "left",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
        title: {
          text: "Jours",
        },
      },
      yaxis: {
        title: {
          text: "Nombre des candidats",
        },
        min: 0,
        max: 100,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  });

  const handleChange = (event, newValue) => {
    setmainTab(newValue);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", flex: 1 }}>
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
            onClick={() => history.push(`${path}/addtest`)}
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
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          {[
            { label: "Candidats", number: 10 },
            { label: "Tests Obtenus", number: 20 },
            { label: "Tests Crées", number: 15 },
          ].map((item, index) => (
            <Box
              style={{
                minHeight: 130,
                minWidth: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
              }}
              boxShadow={5}
            >
              <Typography
                style={{ fontSize: 55, fontWeight: "900", textAlign: "center" }}
              >
                {item.number}
              </Typography>
              <Typography
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 13,
                }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </div>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={350}
          width={550}
        />
      </div>
    </div>
  );
}
