import { Switch, Route, useRouteMatch, useLocation } from "react-router-dom";

import React from "react";
import DashboardHeader from "../../component/header-dashboard";
import DashboardMenu from "../../component/menu-dashboard";
import DashboardHome from "../dashboard/home";
import "./style.css";
import DashboardTests from "./tests";
import DashboardCandidates from "./candidates";
import CreateTest from "./createTest";
import QcmTest from "./createTest/qcmTest";

export default function Tests() {
  let { path, url } = useRouteMatch();
  const location = useLocation();
  console.log(location.pathname);

  const displayTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Bienvenue !";
      case "/dashboard/tests":
        return "Les Tests";
      case "/dashboard/candidates":
        return "Les Candidats";
      case "/dashboard/addtest":
        return "Ajout Test";
      case "/dashboard/qcmtest":
        return "Question Choix Multiple";
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <DashboardMenu />
      <div style={{ display: "flex", flexDirection: "column", marginLeft: 15 }}>
        <DashboardHeader title={displayTitle()} />
        <div style={{ display: "flex", flex: 1, paddingTop: 30 }}>
          <Switch>
            <Route exact path={path} component={DashboardHome} />
            <Route exact path={`${path}/tests`} component={DashboardTests} />
            <Route
              exact
              path={`${path}/candidates`}
              component={DashboardCandidates}
            />
            <Route exact path={`${path}/addtest`} component={CreateTest} />
            <Route path={`${path}/qcmtest`} component={QcmTest} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
