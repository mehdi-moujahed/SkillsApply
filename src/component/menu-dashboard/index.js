import React from "react";
import "./style.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import { Box, IconButton } from "@material-ui/core";
import { useHistory } from "react-router";
import { useRouteMatch } from "react-router-dom";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
export default function DashboardMenu() {
  const history = useHistory();
  let { path } = useRouteMatch();

  return (
    <div>
      <Box className="menu_dashboard" boxShadow={20}>
        <img src="./dashboard-logo.png" id="logo_dashboard" alt="ssss" />
        <IconButton onClick={() => history.push(`${path}`)}>
          <HomeOutlinedIcon color="secondary" id="menu_dashboard_icons" />
        </IconButton>
        <IconButton onClick={() => history.push(`${path}/tests`)}>
          <AssignmentOutlinedIcon color="secondary" id="menu_dashboard_icons" />
        </IconButton>
        <IconButton onClick={() => history.push(`${path}/tests`)}>
          <AssignmentTurnedInIcon color="secondary" id="menu_dashboard_icons" />
        </IconButton>
        <IconButton onClick={() => history.push(`${path}/candidates`)}>
          <GroupOutlinedIcon color="secondary" id="menu_dashboard_icons" />
        </IconButton>
        <IconButton>
          <ExitToAppOutlinedIcon color="secondary" id="exit_icon" />
        </IconButton>
      </Box>
    </div>
  );
}
