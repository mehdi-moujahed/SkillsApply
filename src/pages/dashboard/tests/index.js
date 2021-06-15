import React, { useEffect, useState } from "react";
import SearchSortFilter from "../../../component/searchsortfilter";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import StarIcon from "@material-ui/icons/Star";
import {
  AppBar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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
import { getAvailablleTest, getCreatedTest } from "../../../store/action";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Pagination from "@material-ui/lab/Pagination";
import { setAvailablesTests } from "../../../store/action/test";

export default function DashboardTests() {
  let { path } = useRouteMatch();

  const history = useHistory();

  const dispatch = useDispatch();

  const testsCreated = useSelector((state) => state.testReducer.testsCreated);

  const availableTests = useSelector(
    (state) => state.testReducer.availableTests
  );

  const [testName, setTestName] = useState("");

  const [testAvailableName, setTestAvailableName] = useState("");

  const [timeFilter, setTimeFilter] = useState(10);

  const [timeFilterAvailable, setTimeFilterAvailable] = useState(10);

  const [testLevel, setTestLevel] = useState("10");

  const [testLevelAvailable, setTestLevelAvailable] = useState("10");

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [selectedDateAvailable, setSelectedDateAvailable] = useState(
    new Date()
  );

  const [valueSlide, setValueSlide] = useState([0, 5]);

  const [valueSlideAvailable, setValueSlideAvailable] = useState([0, 5]);

  const [valueSlide2, setValueSlide2] = useState([0, 5]);

  const [valueSlide2Available, setValueSlide2Available] = useState([0, 5]);

  const totalPagesTestsCreated = useSelector(
    (state) => state.testReducer.pagination.totalPages
  );

  const currentPage = useSelector(
    (state) => state.testReducer.pagination.currentPage
  );
  const totalPagesAvailableTests = useSelector(
    (state) => state.testReducer.availableTestsPagination.totalPages
  );

  const currentPageAvailableTests = useSelector(
    (state) => state.testReducer.availableTestsPagination.currentPage
  );

  const [state, setState] = useState({
    right: false,
    testIndex: 0,
    createdTestsNbr: 5,
    createdTestsAvailableNbr: 5,
    testAvailableIndex: 0,
  });

  const [mainTab, setmainTab] = useState("one");

  const handleChange = (event, newValue) => {
    setmainTab(newValue);
  };

  useEffect(() => {
    dispatch(
      getAvailablleTest(
        "getAvailableTests",
        0,
        state.createdTestsAvailableNbr,
        testAvailableName,
        timeFilterAvailable,
        parseFloat(testLevelAvailable),
        moment(selectedDateAvailable)
          .add(1, "days")
          .format("yyyy-MM-DD")
          .toString(),
        valueSlideAvailable[0],
        valueSlideAvailable[1]
      )
    );
    dispatch(
      getCreatedTest(
        "getCreatedTests",
        0,
        state.createdTestsNbr,
        testName,
        timeFilter,
        parseFloat(testLevel),
        moment(selectedDate).add(1, "days").format("yyyy-MM-DD").toString(),
        valueSlide[0],
        valueSlide[1]
      )
    );
  }, [
    state.createdTestsNbr,
    testName,
    timeFilter,
    testLevel,
    selectedDate,
    valueSlide,
    state.createdTestsAvailableNbr,
    testAvailableName,
    timeFilterAvailable,
    testLevelAvailable,
    selectedDateAvailable,
    valueSlideAvailable,
  ]);

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
            height: "60vh",
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
            {mainTab === "one"
              ? availableTests[state.testAvailableIndex]?.name
              : testsCreated[state.testIndex]?.name}
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
            {mainTab === "one"
              ? availableTests[state.testAvailableIndex]?.description
              : testsCreated[state.testIndex]?.description}
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
                {mainTab === "one"
                  ? availableTests[state.testAvailableIndex]?.duration
                  : testsCreated[state.testIndex]?.duration + " min"}
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
                {mainTab === "one"
                  ? availableTests[state.testAvailableIndex]?.rate
                  : testsCreated[state.testIndex]?.rate}
              </Typography>
            </div>
          </div>
        </div>
        <div>
          <Button id="assign_test_button" variant="outlined">
            Attribuer à un candidat
          </Button>
        </div>
      </div>
    </div>
  );
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: 160,
              }}
            >
              <Typography
                variant="subtitle1"
                style={{ color: "black", paddingRight: 10 }}
              >
                Tests par page
              </Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={state.createdTestsNbr}
                onChange={(event) =>
                  setState({
                    ...state,
                    createdTestsNbr: event.target.value,
                  })
                }
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
              </Select>
            </div>
          </Tabs>
        </AppBar>
        <TabPanel value={mainTab} index="one">
          {availableTests?.map((item, index) => (
            <CustomBar
              testName={item.name}
              duration={item.duration + " min"}
              score={item.rate}
              buttonLabel="Afficher le test"
              onClick={() => {
                setState({
                  ...state,
                  right: true,
                  testAvailableIndex: index,
                });
              }}
              testBar
            ></CustomBar>
          ))}
        </TabPanel>
        <TabPanel value={mainTab} index="two">
          {testsCreated?.map((item, index) => (
            <CustomBar
              testName={item.name}
              duration={item.duration + " min"}
              score={item.rate}
              buttonLabel="Afficher le test"
              onClick={() => {
                setState({
                  ...state,
                  right: true,
                  testIndex: index,
                });
                console.log("testindex", state.testIndex);
              }}
              testBar
            ></CustomBar>
          ))}
        </TabPanel>
        {mainTab === "two" ? (
          <Pagination
            className="pagination_container"
            count={totalPagesTestsCreated}
            page={currentPage + 1}
            boundaryCount={1}
            onChange={(event, value) => {
              setState({ ...state, pageNumber: value - 1 });
              dispatch(
                getCreatedTest(
                  "getCreatedTests",
                  value - 1,
                  state.createdTestsNbr,
                  testName,
                  timeFilter,
                  parseFloat(testLevel),
                  moment(selectedDate)
                    .add(1, "days")
                    .format("yyyy-MM-DD")
                    .toString(),
                  valueSlide[0],
                  valueSlide[1]
                )
              );
            }}
            variant="outlined"
            color="primary"
          />
        ) : (
          <Pagination
            className="pagination_container"
            count={totalPagesAvailableTests}
            page={currentPageAvailableTests + 1}
            boundaryCount={1}
            onChange={(event, value) => {
              setState({ ...state, pageNumber: value - 1 });
              dispatch(
                getAvailablleTest(
                  "getAvailableTests",
                  value - 1,
                  state.createdTestsAvailableNbr,
                  testAvailableName,
                  timeFilterAvailable,
                  parseFloat(testLevelAvailable),
                  moment(selectedDateAvailable)
                    .add(1, "days")
                    .format("yyyy-MM-DD")
                    .toString(),
                  valueSlideAvailable[0],
                  valueSlideAvailable[1]
                )
              );
            }}
            variant="outlined"
            color="primary"
          />
        )}
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
          onClick={() => {
            history.push(`${path.replace("/tests", "")}/addtest`);
          }}
        >
          Ajouter un nouveau test
        </Button>
        <SearchSortFilter
          testName={mainTab === "one" ? testAvailableName : testName}
          setTestName={
            mainTab === "one"
              ? (value) => setTestAvailableName(value)
              : (value) => setTestName(value)
          }
          timeFilter={mainTab === "one" ? timeFilterAvailable : timeFilter}
          testLevel={mainTab === "one" ? testLevelAvailable : testLevel}
          setTestLevel={
            mainTab === "one"
              ? (value) => setTestLevelAvailable(value)
              : (value) => setTestLevel(value)
          }
          setTimeFilter={
            mainTab === "one"
              ? (value) => setTimeFilterAvailable(value)
              : (value) => setTimeFilter(value)
          }
          selectedDate={
            mainTab === "one" ? selectedDateAvailable : selectedDate
          }
          setSelectedDate={
            mainTab === "one"
              ? (value) => setSelectedDateAvailable(value)
              : (value) => setSelectedDate(value)
          }
          valueSlide={mainTab === "one" ? valueSlide2Available : valueSlide2}
          setValueSlide={
            mainTab === "one"
              ? (value) => setValueSlide2Available(value)
              : (value) => setValueSlide2(value)
          }
          onChange={
            mainTab === "one"
              ? () => setValueSlideAvailable(valueSlide2Available)
              : () => setValueSlide(valueSlide2)
          }
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
