import React from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NavBarHeader from "../navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
    marginTop: 5,
  },
}));
export default function Header(props) {
  const classes = useStyles();

  const { Iconsvg, title, subtitle, leftoright } = props;
  return (
    <div>
      <div className="main_container_header">
        <div className={classes.root}>
          <NavBarHeader />
          <div
            className="header_container"
            style={{
              flexDirection: leftoright ? "row" : "row-reverse",
            }}
          >
            {<Iconsvg />}
            <div>
              <Typography variant="h3" id="header_title">
                {title}
              </Typography>
              <Typography variant="h5" id="header_subtitle">
                {subtitle}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
