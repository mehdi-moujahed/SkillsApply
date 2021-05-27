import React from "react";
import "./style.css";
import { IconButton, Typography } from "@material-ui/core";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import { IconFlagFR } from "material-ui-flags";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
export default function DashboardHeader(props) {
  const { title } = props;
  return (
    <div>
      <div className="dashboard_header">
        <Typography variant="h4" color="secondary" id="dashboard_header_title">
          {title}
        </Typography>
        <img src="./avatar.png" id="avatar_dashboard" alt=""/>
        <div className="date_time_header">
          <div className="date_time_header_container">
            <img src="./calendar-logo.png" id="dashboard_header_logos" alt=""/>
            <Typography variant="subtitle2" color="secondary">
              Ven. 26 fév. 2021
            </Typography>
          </div>
          <div className="header_time_container">
            <img src="./clock-logo.png" id="dashboard_header_logos" alt=""/>
            <Typography variant="subtitle2" color="secondary">
              14:27:35
            </Typography>
          </div>
        </div>
        <div className="pic_language_container">
          <img src="profile-picture.png" id="profile_pic_header" alt=""/>
          <NotificationsNoneOutlinedIcon color="secondary" id="notif_logo" />
          <IconButton>
            <IconFlagFR id="flag" />
            <p id="flag_name">FR</p>
            <ArrowDropDownIcon color="secondary" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
