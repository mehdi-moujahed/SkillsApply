import { Button, Typography } from "@material-ui/core";
import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import "./style.css";
export default function PriceBar(props) {
  const { item } = props;
  return (
    <div className="pricebar">
      <div className="pricebarHeader"></div>
      <div className="pricebarTitles">
        <Typography variant="h4" id="pricebar_title">
          {item.title}
        </Typography>
        <Typography variant="subtitle1" id="pricebar_subtitle">
          {item.subtitle}
        </Typography>
      </div>
      <div className="pricebar_content">
        <Typography variant="h4" id="pricebar_title">
          {item.price === 0 ? "14 jours gratuit" : `${item.price}TND/mois`}
        </Typography>
        <Typography variant="subtitle1" id="subtitle2">
          Aucune carte de crédit n'est requise
        </Typography>
      </div>
      <div className="pack_features_container">
        {item.features?.map((item) => (
          <div className="pack_features">
            <CheckIcon id="features_icon" />
            <p style={{ color: "white" }}>{item.title}</p>
          </div>
        ))}
      </div>
      <div className="pricebar_button">
        <Button id="buttonPrices" variant="contained">
          Achetez Maintenant
        </Button>
      </div>
    </div>
  );
}
