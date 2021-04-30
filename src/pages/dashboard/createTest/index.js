import { Box, Button, IconButton, Typography } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import "./style.css";
import EmptyTest from "../emptyTest";
import Scrollbars from "react-custom-scrollbars";

const questions = [
  {
    number: 1,
    type: "choix multiple",
    duration: "1 heures",
    score: "50",
    level: "Difficile",
  },
  {
    number: 2,
    type: "text",
    duration: "1 heures",
    score: "80",
    level: "Intermédiare",
  },
  {
    number: 3,
    type: "Programmation",
    duration: "2 heures",
    score: "100",
    level: "Facile",
  },
  {
    number: 4,
    type: "Correction Code",
    duration: "45 min",
    score: "90",
    level: "Difficile",
  },
  {
    number: 4,
    type: "Correction Code",
    duration: "45 min",
    score: "90",
    level: "Difficile",
  },
  {
    number: 4,
    type: "Correction Code",
    duration: "45 min",
    score: "90",
    level: "Difficile",
  },
  {
    number: 4,
    type: "Correction Code",
    duration: "45 min",
    score: "90",
    level: "Difficile",
  },
  {
    number: 4,
    type: "Correction Code",
    duration: "45 min",
    score: "90",
    level: "Difficile",
  },
  {
    number: 4,
    type: "Correction Code",
    duration: "45 min",
    score: "90",
    level: "Difficile",
  },
];

export default function CreateTest() {
  return questions.length > 0 ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          //   height: "100%",
          //   width: "100%",
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{
              fontSize: 20,
              fontWeight: "bold",
              width: "15%",
              textAlign: "center",
            }}
          >
            Questions
          </Typography>
          <Typography
            style={{
              fontSize: 20,
              fontWeight: "bold",
              width: "15%",
              textAlign: "center",
            }}
          >
            Type
          </Typography>
          <Typography
            style={{
              fontSize: 20,
              fontWeight: "bold",
              width: "15%",
              textAlign: "center",
            }}
          >
            Durée
          </Typography>
          <Typography
            style={{
              fontSize: 20,
              fontWeight: "bold",
              width: "15%",
              textAlign: "center",
            }}
          >
            Points
          </Typography>
          <Typography
            style={{
              fontSize: 20,
              fontWeight: "bold",
              width: "15%",
              textAlign: "center",
            }}
          >
            Difficulté
          </Typography>
          <div
            style={{ width: "15%", justifyContent: "center", display: "flex" }}
          >
            <Button
              variant="outlined"
              style={{
                height: 39,
                color: "white",
                fontWeight: "bold",
                textTransform: "none",
                borderRadius: 10,
                backgroundColor: "#008282",
                fontSize: 17,
                width: "83%",
              }}
            >
              Terminer
            </Button>
          </div>
        </div>
      </div>

      <Scrollbars
        style={{
          display: "flex",
          width: "100%",

          //   height: "100%",
        }}
        renderTrackVertical={(props) => (
          <div {...props} className="track-vertical" />
        )}
        renderThumbVertical={(props) => (
          <div {...props} className="thumb-vertical" />
        )}
      >
        <div style={{ marginLeft: 30, marginRight: 30 }}>
          {questions.map((item) => (
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: 60,
                width: "100%",
                marginTop: 30,
                borderRadius: 14,
              }}
              boxShadow={5}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    width: "15%",
                    textAlign: "center",
                  }}
                >
                  {item.number}
                </Typography>
                <Typography
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    width: "15%",
                    textAlign: "center",
                    textTransform: "capitalize",
                  }}
                >
                  {item.type}
                </Typography>
                <Typography
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    width: "15%",
                    textAlign: "center",
                  }}
                >
                  {item.duration}
                </Typography>
                <Typography
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    width: "15%",
                    textAlign: "center",
                  }}
                >
                  {item.score}
                </Typography>
                <Typography
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    width: "15%",
                    textAlign: "center",
                  }}
                >
                  {item.level}
                </Typography>
                <div
                  style={{
                    width: "15%",
                    justifyContent: "space-around",
                    display: "flex",
                  }}
                >
                  <IconButton>
                    <EditIcon style={{ color: "black" }} />
                  </IconButton>
                  <IconButton>
                    <FileCopyIcon style={{ color: "black" }} />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon style={{ color: "black" }} />
                  </IconButton>
                </div>
              </div>
            </Box>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            // alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          <Button
            variant="outlined"
            style={{
              backgroundColor: "#008288",
              textTransform: "none",
              height: 49,
              borderRadius: 14,
              width: 222,
              color: "white",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Créer une question
          </Button>
        </div>
      </Scrollbars>
    </div>
  ) : (
    <EmptyTest />
  );
}
