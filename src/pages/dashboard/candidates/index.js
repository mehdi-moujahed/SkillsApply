import { Button, SwipeableDrawer, withStyles } from "@material-ui/core";
import React from "react";
import Scrollbars from "react-custom-scrollbars";
import CustomBar from "../../../component/custom-bar";
import SearchSortFilter from "../../../component/searchsortfilter";
import StarIcon from "@material-ui/icons/Star";
import { Box, Typography } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Rating from "@material-ui/lab/Rating";
import CircleIcon from "@material-ui/icons/FiberManualRecordRounded";
const StyledRating = withStyles({
  iconFilled: {
    color: "#008288",
  },
  iconHover: {
    color: "#008288",
  },
})(Rating);
export default function DashboardCandidates() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: 579,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
      }}
    >
      <CancelIcon
        onClick={toggleDrawer(anchor, false)}
        style={{
          position: "absolute",
          color: "white",
          top: 16,
          left: 14,
          fontSize: 30,
          cursor: "pointer",
        }}
      />

      <img
        src="../rectangle-drawer.png"
        style={{ height: "100%", width: 60 }}
      />
      <div
        style={{
          // backgroundColor: "red",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="./hairstyle-logo.png" alt="hairStryle" />
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", marginLeft: 15 }}
            >
              Mehdi Moujahed
            </Typography>
          </div>
          <Typography
            style={{
              fontWeight: "900",
              fontSize: 13,
              textAlign: "center",
              marginRight: 15,
            }}
          >
            Mieux que <br />
            <Typography
              color="primary"
              variant="h6"
              style={{ fontWeight: "bold" }}
            >
              97%
            </Typography>
            des développeurs
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginTop: 30,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="../react-logo.png" />
            <p style={{ fontWeight: "bold", fontSize: 22 }}>React JS</p>
          </div>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              height: 300,
              width: 466,
              //   alignSelf: "center",
              borderRadius: 15,
              marginLeft: 15,
            }}
            boxShadow={5}
          >
            {[1, 2, 3, 4].map(() => (
              <div
                style={{
                  display: "flex",
                  // alignItems: "center",
                  justifyContent: "space-between",
                  marginLeft: 30,
                  marginRight: 30,
                  marginTop: 30,
                }}
              >
                <Typography
                  style={{ fontSize: 17, marginRight: 35, fontWeight: "bold" }}
                  color="primary"
                >
                  Manipluer le DOM
                </Typography>
                <Box borderColor="transparent">
                  <StyledRating
                    readOnly
                    name="customized-color"
                    defaultValue={2}
                    getLabelText={(value) =>
                      `${value} Heart${value !== 1 ? "s" : ""}`
                    }
                    // precision={0.5}
                    icon={<CircleIcon fontSize="inherit" />}
                  />
                </Box>
                <Typography style={{ fontSize: 16, fontWeight: "900" }}>
                  60/100
                </Typography>
              </div>
            ))}
          </Box>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 50,
              marginLeft: 15,
              marginRight: 50,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography style={{ fontSize: 18, fontWeight: "900" }}>
                Note du candidat
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  color="primary"
                  style={{ fontSize: 18, fontWeight: "900" }}
                >
                  280
                </Typography>
                {/* <Typography style={{ fontSize: 20, fontWeight: "900" }}>
                  /
                </Typography> */}
                <Typography style={{ fontSize: 18, fontWeight: "900" }}>
                  / 240
                </Typography>
                <div
                  style={{
                    height: 45,
                    width: 45,
                    borderRadius: 30,
                    backgroundColor: "#008288",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: 20,
                  }}
                >
                  <Typography
                    color="secondary"
                    style={{ fontWeight: "bold", fontSize: 20 }}
                  >
                    70%
                  </Typography>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography style={{ fontSize: 18, fontWeight: "900" }}>
                Durée passée
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: 13,
                  justifyContent: "center",
                }}
              >
                <Typography
                  color="primary"
                  style={{ fontSize: 18, fontWeight: "900" }}
                >
                  1h
                </Typography>
                {/* <Typography style={{ fontSize: 20, fontWeight: "900" }}>
                  /
                </Typography> */}
                <Typography style={{ fontSize: 18, fontWeight: "900" }}>
                  / 1h30
                </Typography>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 50,
              marginRight: 44,
              marginLeft: 15,
            }}
          >
            <Button
              variant="outlined"
              style={{
                color: "white",
                backgroundColor: "#008288",
                width: 200,
                height: 48,
                borderRadius: 14,
                textTransform: "none",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Voir les réponses
            </Button>
            <Button
              variant="outlined"
              style={{
                color: "white",
                backgroundColor: "#008288",
                width: 200,
                height: 48,
                borderRadius: 14,
                textTransform: "none",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Profil du candidat
            </Button>
          </div>
        </div>

        {/* <div style={{ display: "flex", alignItems: "center" }}>
          <img src="../react-logo.png" />
          <p style={{ fontSize: 36, paddingLeft: 25, fontWeight: "bold" }}>
            React JS
          </p>
        </div> */}
        {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            // marginLeft: 80,
          }}
        >
          <p style={{ fontSize: 30, fontWeight: "bold", marginBottom: 0 }}>
            Description :
          </p>
          <p style={{ fontSize: 20, fontWeight: "bold" }}>
            React est une bibliothèque JavaScript libre développée par Facebook
            depuis 2013. Le but principal de cette bibliothèque est de faciliter
            la création d'application web monopage, via la création de
            composants dépendant d'un état et générant une page HTML à chaque
            changement d'état.
          </p>
        </div> */}

        {/* <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <p style={{ fontSize: 30, fontWeight: "bold" }}>Information :</p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {[
              { img: "../footsteps-logo.png", imgLabel: "4 Etapes" },
              { img: "../fitness-logo.png", imgLabel: "30 Excercices" },
              { img: "../trophy-logo.png", imgLabel: "3 Niveaux" },
            ].map((item) => (
              <Box
                boxShadow={10}
                style={{
                  height: 130,
                  width: 119,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={item.img} style={{ height: 60, width: 60 }} />
                <p style={{ fontSize: 15, fontWeight: "bold" }}>
                  {item.imgLabel}
                </p>
              </Box>
            ))}
          </div>
        </div> */}
        {/* <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "88%",
            flex: 1,
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography style={{ fontSize: 22, fontWeight: "bold" }}>
              Durée :
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <WatchLaterIcon />
              <Typography style={{ marginTop: 5, marginLeft: 5 }}>
                1h 30min
              </Typography>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography style={{ fontSize: 22, fontWeight: "bold" }}>
              Note :
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <StarIcon />
              <Typography style={{ marginTop: 5 }}>4/5</Typography>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: 30,
      }}
    >
      <Scrollbars
        style={{
          display: "flex",
          width: "47vw",
          height: "75vh",
        }}
        renderTrackVertical={(props) => (
          <div {...props} className="track-vertical" />
        )}
        renderThumbVertical={(props) => (
          <div {...props} className="thumb-vertical" />
        )}
      >
        <div className="tests_main_container">
          {[1, 2, 3, 4, 5, 6].map(() => (
            <CustomBar
              testImg="../me.jpg"
              testName="Mehdi Moujahed"
              duration="1h 30min"
              score="4/5"
              buttonLabel="Plus de détails"
              onClick={toggleDrawer("right", true)}
              testBar={false}
            ></CustomBar>
          ))}
        </div>
      </Scrollbars>
      <div className="search_container">
        <div>
          <SwipeableDrawer
            anchor="right"
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
          >
            {list("right")}
          </SwipeableDrawer>
        </div>
        <SearchSortFilter searchTitle="Rechercher Les candidats" />
      </div>
    </div>
  );
}
