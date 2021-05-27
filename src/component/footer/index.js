import { Link, Typography } from "@material-ui/core";
import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./style.css";
export default function Footer() {
  return (
    <div className="footer_main_container">
      <div className="footer_container">
        <div className="footer_titles">
          <Typography variant="h4" id="footer_title">
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
        <div className="footer_titles">
          <Typography variant="h4" id="footer_title">
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
        <div className="footer_titles">
          <Typography variant="h4" id="footer_title">
            Contactez-nous
          </Typography>
          <div className="footer_underline3"></div>

          <Link
            variant="inherit"
            id="first_menu"
            style={{ cursor: "default", textDecoration: "none" }}
          >
            <PhoneIcon id="footer_icon" />
            +216 55.287.186
          </Link>
          <Link
            variant="inherit"
            id="second_menu"
            style={{ textDecoration: "none" }}
          >
            <FacebookIcon id="footer_icon" />
            Reactit
          </Link>
          <Link
            variant="inherit"
            id="second_menu"
            style={{ textDecoration: "none" }}
          >
            <InstagramIcon id="footer_icon" />
            Reactit.Agency
          </Link>
        </div>
      </div>
      <div className="footer_footer">
        <img src="./logo-footer.png" id="footer_logo" alt=""/>
        <p style={{ color: "white",fontSize:10 }}>
          Made with love by <b>Reactit</b> in Sousse, Tunisie 2021 Tous les
          droits sont réservés.
        </p>
      </div>
    </div>
  );
}
