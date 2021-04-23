import React from "react";
import SearchSortFilter from "../../../component/searchsortfilter";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import StarIcon from "@material-ui/icons/Star";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import "./style.css";
import Scrollbars from "react-custom-scrollbars";
export default function DashboardTests() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 30,
        }}
      >
        <Scrollbars
          style={{ display: "flex", width: 711, height: "75vh" }}
          renderTrackHorizontal={({ style, ...props }) => (
            <div
              {...props}
              style={{ ...style, backgroundColor: "blue", color: "red" }}
            />
          )}
          renderTrackVertical={({ style, ...props }) => (
            <div
              {...props}
              style={{ ...style, backgroundColor: "blue", color: "black" }}
            />
          )}
        >
          <div style={{ marginTop: 10 }} className="tests_main_container">
            {[1, 2, 3, 4, 5, 6, 7].map(() => (
              <div className="tests_container">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src="../react-logo.png" />
                  <p style={{ color: "white", fontSize: 16, paddingLeft: 15 }}>
                    React JS
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: 150,
                  }}
                >
                  <WatchLaterIcon color="secondary" />
                  <p style={{ color: "white", fontSize: 13, paddingLeft: 5 }}>
                    1h 30min
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <StarIcon color="secondary" style={{ fontSize: 17 }} />
                  <p style={{ color: "white", fontSize: 13, paddingLeft: 5 }}>
                    4/5
                  </p>
                </div>
                <Button variant="outlined" id="show_test_button">
                  Afficher le test
                </Button>
              </div>
            ))}
          </div>
        </Scrollbars>
        <div className="search_container">
          <SearchSortFilter />
        </div>
      </div>
    </div>
  );
}
