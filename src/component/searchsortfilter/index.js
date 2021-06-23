import React, { useState } from "react";
import "./style.css";
import {
  Box,
  FormControlLabel,
  makeStyles,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Slider,
  TextField,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return value;
}

export default function SearchSortFilter(props) {
  const {
    searchTitle,
    testPage,
    testName,
    setTestName,
    timeFilter,
    setTimeFilter,
    testLevel,
    setTestLevel,
    selectedDate,
    setSelectedDate,
    valueSlide,
    setValueSlide,
    onChange,
    candidate,
    width,
  } = props;

  const classes = useStyles();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChangeSlider = (event, newValue) => {
    setValueSlide(newValue);
  };

  return (
    <div>
      <Box className="search_sort_container" boxShadow={20}>
        <div style={{ width: width }}>
          <div className="search_sort_title">
            <img
              src="../search-icon.png"
              alt="search_icon"
              style={{ height: 25, width: 25 }}
            />
            <p
              style={{
                fontWeight: "bold",
                fontSize: 25,
                paddingLeft: 15,
              }}
            >
              {searchTitle}
            </p>
          </div>
          <Box boxShadow={5} className="search_box">
            <TextField
              className="input_rounded"
              id="outlined-basic"
              variant="outlined"
              style={{ width: "100%" }}
              value={testName}
              onChange={(event) => setTestName(event.target.value)}
            />
          </Box>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="../filter-icon.png"
              alt="filter_icon"
              style={{ height: 25, width: 25 }}
            />
            <p
              style={{
                fontWeight: "bold",
                fontSize: 25,
                paddingLeft: 15,
              }}
            >
              Trier et Filtrer
            </p>
          </div>
          {!candidate ? (
            <div className="search_sort_title">
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  paddingRight: 20,
                }}
              >
                Séléctionner :
              </p>
              <Select
                labelId="demo-simple-select-label"
                className="filter_select"
                value={timeFilter}
                onChange={(event) => setTimeFilter(event.target.value)}
              >
                <MenuItem value={10}>Les plus récents</MenuItem>
                <MenuItem value={20}>Les plus populaires</MenuItem>
              </Select>
            </div>
          ) : (
            <div className="search_sort_title">
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  paddingRight: 20,
                }}
              >
                Diplôme :
              </p>
              <Select
                labelId="demo-simple-select-label"
                className="filter_select"
                value={timeFilter}
                onChange={(event) => setTimeFilter(event.target.value)}
              >
                <MenuItem value={50}>Tous les diplômes</MenuItem>
                <MenuItem value={10}>Licence</MenuItem>
                <MenuItem value={20}>Master</MenuItem>
                <MenuItem value={30}>Ingénieur</MenuItem>
                <MenuItem value={40}>Autre</MenuItem>
              </Select>
            </div>
          )}
          <div style={{ display: "flex", alignItems: "center" }}>
            <p
              style={{
                fontWeight: "bold",
                fontSize: 20,
                paddingRight: 20,
              }}
            >
              Date :
            </p>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                id="date-picker-dialog"
                format="dd/MM/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                color="primary"
              />
            </MuiPickersUtilsProvider>
          </div>
          {testPage ? (
            <div className="search_sort_title">
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  paddingRight: 20,
                }}
              >
                Niveau :
              </p>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={testLevel}
                onChange={(event) => setTestLevel(event.target.value)}
                row
                className="radiogroup"
              >
                <FormControlLabel
                  value="10"
                  control={<Radio />}
                  label="Débutant"
                />
                <FormControlLabel
                  value="20"
                  control={<Radio />}
                  label="Moyen"
                />
                <FormControlLabel
                  value="30"
                  control={<Radio />}
                  label="Difficle"
                />
              </RadioGroup>
            </div>
          ) : (
            <p></p>
          )}
          {!candidate ? (
            <div className="search_sort_title">
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  paddingRight: 20,
                }}
              >
                Note :
              </p>
              <div className={classes.root}>
                <Slider
                  className="dashboard_slider"
                  value={valueSlide}
                  onChange={handleChangeSlider}
                  onChangeCommitted={onChange}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  getAriaValueText={valuetext}
                  marks
                  step={1}
                  min={0}
                  max={5}
                />
              </div>
            </div>
          ) : (
            <div className="search_sort_title"></div>
          )}
        </div>
      </Box>
    </div>
  );
}
