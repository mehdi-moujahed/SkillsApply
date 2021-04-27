import { Button } from "@material-ui/core";
import React from "react";

export default function DashboardHome() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <Button variant="outlined" style={{}}>
            Ajouter un nouveau test
          </Button>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}></div>
    </div>
  );
}
