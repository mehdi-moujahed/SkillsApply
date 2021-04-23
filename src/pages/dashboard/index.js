import {
  BrowserRouter as Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

import React from "react";
import DashboardHeader from "../../component/header-dashboard";
import DashboardMenu from "../../component/menu-dashboard";
import DashboardHome from "../dashboard/home";
import "./style.css";
import DashboardTests from "./tests";

export default function Tests() {
  let { path, url } = useRouteMatch();
  return (
    <div style={{ display: "flex" }}>
      <DashboardMenu />
      <div style={{ display: "flex", flexDirection: "column", marginLeft: 15 }}>
        <DashboardHeader title="Les Tests" />
        <div style={{ overflow: "auto" }}>
          <DashboardTests />
        </div>
        {/* <Switch>
          <Route exact path={path} component={DashboardHome} />
          <Route exact path={`${path}/tests`} component={DashboardTests} />
        </Switch> */}
      </div>
    </div>
  );
}
