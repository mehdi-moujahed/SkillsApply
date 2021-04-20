import React from "react";
import "./style.css";
import { ReactComponent as HomeLogo } from "../../assets/svg/home-logo.svg";
import { ReactComponent as AboutusLogo } from "../../assets/svg/about-us-logo.svg";
import Achievements from "../../component/achievements";
import DeveloppersLogo from "../../assets/svg/developpers.png";
import TestLogo from "../../assets/svg/tests-done-logo.png";
import ClientsLogo from "../../assets/svg/clients-satisfaction-logo.png";
import Sponsors from "../../component/sponsors";
import BankLogo from "../../assets/svg/bank.png";
import Footer from "../../component/footer";
import Header from "../../component/header";

export default function Home() {
  return (
    <div>
      <Header
        title={"La plateforme\npour vos recrutements tech"}
        subtitle={"Trouver, filtrer et retenir des\ndéveloppeurs talentueux"}
        Iconsvg={HomeLogo}
        leftoright={false}
      />
      <div className="seperator_container">
        <p id="seperator_title">À Propos De Nous</p>
        <div id="seperator_line"></div>
      </div>
      <div className="about_us">
        <div id="about_us_container">
          <AboutusLogo id="about_us_logo" />
          <p id="about_us_text">
            Notre but est de permettre <br />
            aux développeurs <br /> d'améliorer leurs <br />
            compétences en continu en
            <br />
            résolvant les problèmes de <br />
            code les plus motivants et <br />
            en échangeant avec les <br />
            meilleurs programmerus du
            <br />
            monde.
          </p>
        </div>
      </div>
      <div className="seperator_container">
        <p id="seperator_title">Nos Chiffres Clés</p>
        <div id="seperator_line"></div>
      </div>
      <div className="achievements_container">
        <Achievements
          label="développeurs"
          numbers="1000+"
          image={DeveloppersLogo}
        />
        <Achievements label="Tests efféctués" numbers="500+" image={TestLogo} />
        <Achievements
          label="Clients satisfaits"
          numbers="95%"
          image={ClientsLogo}
        />
      </div>
      <div className="seperator_container" style={{ marginTop: 89 }}>
        <p id="seperator_title">Nos Partenaires</p>
        <div id="seperator_line"></div>
      </div>
      <div className="sponsors_container">
        <Sponsors
          image={
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <Sponsors image={BankLogo} />
              <Sponsors image={BankLogo} />
              <Sponsors image={BankLogo} />
              <Sponsors image={BankLogo} />
            </div>
          }
        />
        <Sponsors image={BankLogo} />
        <Sponsors image={BankLogo} />
        <Sponsors image={BankLogo} />
      </div>
      <Footer />
    </div>
  );
}
