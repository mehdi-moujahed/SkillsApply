import { Link, Typography } from "@material-ui/core";
import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./style.css";
export default function Footer() {
  return (
    <div className="footer_container">
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "space-around",
          marginTop: 200,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h4" style={{ color: "white" }}>
            Produits
          </Typography>
          <div className="footer_underline"></div>
          <Link variant="inherit" id="first_menu">
            &gt; Accueil
          </Link>
          <Link variant="inherit" id="second_menu">
            &gt; Fonctionnalités
          </Link>
          <Link variant="inherit" id="second_menu">
            &gt; Prix
          </Link>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h4" style={{ color: "white" }}>
            Légal
          </Typography>
          <div className="footer_underline2"></div>

          <Link variant="inherit" id="first_menu">
            &gt; Conditions Générales
          </Link>
          <Link variant="inherit" id="second_menu">
            &gt; Conditions de ventes
          </Link>
          <Link variant="inherit" id="second_menu">
            &gt; Politique de condifentialité
          </Link>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h4" style={{ color: "white" }}>
            Contactez-nous
          </Typography>
          <div className="footer_underline3"></div>

          <Link
            variant="inherit"
            id="first_menu"
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "default",
              textDecoration: "none",
            }}
          >
            <PhoneIcon
              style={{ color: "white", fontSize: 23, paddingRight: 10 }}
            />
            +216 55.287.186
          </Link>
          <Link
            variant="inherit"
            id="second_menu"
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "default",
              textDecoration: "none",
            }}
          >
            <FacebookIcon
              style={{ color: "white", fontSize: 23, paddingRight: 10 }}
            />
            Reactit
          </Link>
          <Link
            variant="inherit"
            id="second_menu"
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "default",
              textDecoration: "none",
            }}
          >
            <InstagramIcon
              style={{ color: "white", fontSize: 23, paddingRight: 10 }}
            />
            Reactit.Agency
          </Link>
        </div>
      </div>
      <div
        style={{ alignSelf: "center", display: "flex", alignItems: "center" }}
      >
        <img src="./logo-footer.png" style={{ marginRight: 20, height: 20 }} />
        <p style={{ color: "white" }}>
          Made with love by <b>Reactit</b> in Sousse, Tunisie 2021 Tous les
          droits sont réservés.
        </p>
      </div>
    </div>
  );
}
