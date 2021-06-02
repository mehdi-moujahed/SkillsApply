import { Switch, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import React from "react";
import { ReactComponent as CreditCard } from "../../assets/svg/credit-card.svg";
import "./style.css";
import PriceBar from "../../component/pricebar";
import Footer from "../../component/footer";
import BankLogo from "../../assets/svg/bank.png";
import Sponsors from "../../component/sponsors";
import Header from "../../component/header";

const data = [
  {
    title: "Premium Pack",
    subtitle: "this is a god pack with cheese",
    price: 0,
    features: [
      {
        title: "Bibliothéques des tests illimité",
      },
      { title: "Bibliothéques des tests " },
      { title: "Bibliothéques illimités" },
      { title: "Bibliothéques illimités" },
      { title: "Bibliothéques illimités" },
      { title: "Bibliothéques illimités" },
    ],
  },
  {
    title: "Premium Pack",
    subtitle: "this is a god pack with cheese",
    price: 300,
    features: [
      {
        title: "Bibliothéques des tests illimité",
      },
      { title: "Bibliothéques des tests " },
      { title: "Bibliothéques illimités" },
      { title: "Bibliothéques illimités" },
      { title: "Bibliothéques illimités" },
      { title: "Bibliothéques illimités" },
    ],
  },
  {
    title: "Premium Pack",
    subtitle: "this is a god pack with cheese",
    price: 300,
    features: [
      {
        title: "Bibliothéques des tests illimité",
      },
      { title: "Bibliothéques des tests " },
      { title: "Bibliothéques illimités" },
      { title: "Bibliothéques illimités" },
      { title: "Bibliothéques illimités" },
      { title: "Bibliothéques illimités" },
    ],
  },
];

export default function Pricing() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Header
        title={"Une tarification\nadaptés à vos besoins"}
        subtitle={"Des prixs raisonnables spécialement\npour vous"}
        Iconsvg={CreditCard}
        leftoright={true}
      />
      <div className="toggle_bar_container">
        <Box boxShadow={10} style={{ borderRadius: 50 }}>
          <div className="toggle_bar">
            <Typography variant="h6" style={{ color: "white" }}>
              Mensuel
            </Typography>
            <Switch
              checked={state.checkedB}
              onChange={handleChange}
              color="default"
              name="checkedB"
              inputProps={{ "aria-label": "checkbox with default color" }}
            />
            <Typography variant="h6" style={{ color: "white" }}>
              Annuel
            </Typography>
          </div>
        </Box>
      </div>
      <div className="price_container">
        {data.map((item) => (
          <PriceBar item={item} />
        ))}
      </div>
      <div className="price_seperator">
        <Box boxShadow={8} id="price_seperator_line"></Box>
      </div>
      <div className="price_sponsors">
        {[1, 2, 3, 4, 5].map(() => (
          <Sponsors image={BankLogo} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
