import React from "react";
import "./style.css";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  makeStyles,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Slider,
  TextField,
  Typography,
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

export default function SearchSortFilter() {
  const classes = useStyles();

  const [value, setValue] = React.useState("debutant");
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("1997-01-26T21:11:54")
  );
  const [valueSlide, setValueSlide] = React.useState([0, 5]);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChangeSlider = (event, newValue) => {
    setValueSlide(newValue);
  };

  return (
    <div>
      <Box className="search_sort_container" boxShadow={20}>
        <div>
          <div className="search_sort_title">
            <img src="./search-icon.png" style={{ height: 25, width: 25 }} />
            <p
              style={{
                fontWeight: "bold",
                fontSize: 25,
                paddingLeft: 15,
              }}
            >
              Recherchez votre test préféré
            </p>
          </div>
          <Box boxShadow={5} className="search_box">
            <TextField
              className="input_rounded"
              id="outlined-basic"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </Box>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="./filter-icon.png" style={{ height: 25, width: 25 }} />
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
              value={20}
            >
              <MenuItem value={10}>Les plus récents</MenuItem>
              <MenuItem value={20}>Les plus populaires</MenuItem>
              <MenuItem value={30}>Les plus vus</MenuItem>
            </Select>
          </div>
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
              value={value}
              onChange={handleChange}
              row
              className="radiogroup"
            >
              <FormControlLabel
                value="debutant"
                control={<Radio />}
                label="Débutant"
              />
              <FormControlLabel
                value="intermediaire"
                control={<Radio />}
                label="Moyen"
              />
              <FormControlLabel
                value="professionnel"
                control={<Radio />}
                label="Difficle"
              />
            </RadioGroup>
          </div>
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
        </div>
      </Box>
    </div>
  );
}
