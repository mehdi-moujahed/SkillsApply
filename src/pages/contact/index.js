import { Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import NavBarHeader from "../../component/navbar";
import "./style.css";
import { ReactComponent as ContactLogo } from "../../assets/svg/contact-logo.svg";

export default function Contact() {
  return (
    <div className="main_container_contact">
      <div style={{ flexGrow: 1 }}>
        <NavBarHeader />
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 160,
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" id="contact_title">
            Contactez-Nous
          </Typography>
          <TextField
            variant="filled"
            label="Nom"
            style={{ marginBottom: 25, width: "45vw" }}
          ></TextField>
          <TextField
            variant="filled"
            label="Email"
            style={{ marginBottom: 25, width: "45vw" }}
          ></TextField>
          <TextField
            variant="filled"
            label="Message"
            multiline
            rows={8}
            style={{ marginBottom: 25, width: "45vw" }}
          ></TextField>
          <Button variant="outlined" id="contact_button">
            Envoyer
          </Button>
        </div>
        <ContactLogo style={{ height: 480 }} />
      </div>
    </div>
  );
}
