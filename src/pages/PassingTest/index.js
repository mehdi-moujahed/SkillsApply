import React, { useEffect, useState } from "react";
import "./style.css";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import {
  Checkbox,
  Typography,
  FormControlLabel,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getCandidateById, getTestToPassAPI } from "../../store/action";
import { useHistory, useLocation } from "react-router-dom";

export default function PassingTest() {
  const [checkBox, setCheckBox] = useState(false);

  const [checkBoxErrorMsg, setCheckBoxErrorMsg] = useState(false);

  const dispatch = useDispatch();

  const location = useLocation();

  const history = useHistory();

  const testID = new URLSearchParams(location.search).get("testID");

  const idCandidate = new URLSearchParams(location.search).get("candidateID");

  const managerId = new URLSearchParams(location.search).get("managerID");

  const test = useSelector((state) => state.testReducer.testToPass);

  const handleChange = (event) => {
    setCheckBox(event.target.checked);
  };

  useEffect(() => {
    dispatch(getTestToPassAPI("getTestExam", testID));
    dispatch(getCandidateById("getCandidate", idCandidate));
  }, []);

  return (
    <div className="passingTest_main_container">
      <div className="passingTest_header">
        <Logo style={{ paddingLeft: 15 }} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 40,
          marginLeft: 150,
        }}
      >
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          Bonjour Cher Candidat !
        </Typography>
        <Typography variant="subtitle1" style={{ marginTop: 30 }}>
          Avant de commencer :
        </Typography>
        <Typography variant="subtitle2" style={{ marginTop: 30 }}>
          1. Une fois que vous avez cliqué sur "Commencer le test", vous ne
          pourrez plus interrompre ni reprendre le test, Asuurez-vous que vous
          ne serez pas interrompue
        </Typography>
        <Typography variant="subtitle2" style={{ marginTop: 30 }}>
          2. Si vous quittez votre navigateur par accident, utilisez le lien
          d'invitaion pour revenir
        </Typography>
        <Typography variant="subtitle2" style={{ marginTop: 30 }}>
          3. Une fois le temps écoulé, toutes les réponses seront enregistrés et
          aucune autre modification ne pourra être effectuée
        </Typography>
        <div
          style={{ marginTop: 30, display: "flex", flexDirection: "column" }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold", paddingRight: 10 }}
            >
              Test :
            </Typography>
            <Typography variant="subtitle1"> {test?.name}</Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold", paddingRight: 10 }}
            >
              Description :
            </Typography>
            <Typography variant="subtitle1"> {test?.description}</Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold", paddingRight: 10 }}
            >
              Durée :
            </Typography>
            <Typography variant="subtitle1">
              {test?.duration + " min"}
            </Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold", paddingRight: 10 }}
            >
              Nombre de questions :
            </Typography>
            <Typography variant="subtitle1">
              {test.questionsID?.length}
            </Typography>
          </div>
        </div>

        <div
          style={{
            alignSelf: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <FormControl
            required
            error={() => {
              if (checkBox) return true;
            }}
            component="fieldset"
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkBox}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label={`J'ai lu et j'accepte toutes les conditions`}
            />
            <FormHelperText>
              {!checkBoxErrorMsg
                ? ""
                : "Veuillez accepter toutes les conditions"}
            </FormHelperText>
          </FormControl>
          <Button
            variant="outlined"
            style={{
              borderRadius: 15,
              backgroundColor: "#008288",
              color: "white",
              marginTop: 25,
              width: 250,
              alignSelf: "center",
            }}
            onClick={() => {
              if (checkBox) {
                setCheckBoxErrorMsg(false);
                history.push(`/testExam?id=1`);
              } else setCheckBoxErrorMsg(true);
            }}
          >
            Commencer le test
          </Button>
        </div>
      </div>
    </div>
  );
}
