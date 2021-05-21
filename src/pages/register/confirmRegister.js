import { Button, Collapse, IconButton } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import { ReactComponent as SuccessLogo } from "../../assets/svg/email-verified.svg";
import { ReactComponent as ErrorLogo } from "../../assets/svg/email-noverified.svg";

export default function ConfirmRegister() {
  let { id } = useParams();
  const axios = require("axios").default;
  const [isloading, setIsloading] = useState(false);
  const [message, setmessage] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [emailResend, setemailResend] = useState(false);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    console.log("parametre ", id);
    setIsloading(true);
    axios
      .get(`http://127.0.0.1:8080/manager/confirmregister/${id}`)
      .then(function (response) {
        if (response.status === 200) {
          console.log("email est vérifié ", response);
          setIsloading(false);
          setmessage(response.data.message);
          setEmailVerified(true);
        }
      })
      .catch(function (error) {
        if (error.status === 500) {
        }
        console.log("error", { error });
        setIsloading(false);
        setmessage(error.response.data.message);
        setEmailVerified(false);
      });
  }, []);

  function resendEmail() {
    axios
      .get(`http://127.0.0.1:8080/manager/resendverificationmail/${id}`)
      .then(function (response) {
        if (response.status === 200) {
          console.log("email est renvoyé avec succées ", response);
          setemailResend(true);
        }
      })
      .catch(function (error) {
        console.log("erreur", { error });
        setemailResend(false);
      });
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {isloading ? (
        <p>loading</p>
      ) : (
        [
          emailVerified ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <SuccessLogo style={{ width: 550, height: 442 }} />
              <p style={{ fontWeight: "bold", fontSize: 20 }}>{message}</p>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <ErrorLogo style={{ width: 550, height: 442 }} />
              <p style={{ fontWeight: "bold", fontSize: 20 }}>{message}</p>
              <Button
                style={{
                  backgroundColor: "#008288",
                  color: "white",
                  textTransform: "none",
                  borderRadius: 30,
                }}
                variant="outlined"
                onClick={resendEmail}
              >
                Envoyer un nouveau email
              </Button>
              {emailResend && (
                <Collapse in={open}>
                  <Alert
                    severity="success"
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                  >
                    Un nouveau email vous a été envoyé
                  </Alert>
                </Collapse>
              )}
            </div>
          ),
        ]
      )}
    </div>
  );
}
