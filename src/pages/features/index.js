import { Box, makeStyles } from "@material-ui/core";

import React from "react";
import { ReactComponent as FeaturesLogo } from "../../assets/svg/features-logo.svg";
import Footer from "../../component/footer";
import "./style.css";
import Header from "../../component/header";

const data = [
  {
    title: "Assistant de tests",
    img: "./home-test-screenshot.png",
    description:
      "Utilisez nos tests techniques\nen ligne pré-configurés et\nparamétrez une campagne\nd’évaluation sur mesure\nen moins de 5 clics.\nNul besoin d’avoir des\nconnaissances en\nprogrammation : c’est\nmagique !",
  },
  {
    title: "Tests techniques",
    img: "./home-test-drawer.png",
    description:
      "Vous n'avez plus envie de faire\npasser des tests de code\nennuyeux ? Vous avez bien\nraison ! Pour vous, nous avons\ncomplètement transformé\nl'expérience du test technique\nen ajoutant des jeux de\nprogrammation à notre\nbibliothèque de questions.",
  },
  {
    title: "Rapport de tests",
    img: "./home-dandidat-drawer.png",
    description:
      "Nos rapports d'évaluation sont\nintuitifs et faciles à interpréter,\nmême pour les recruteurs\nnon-tech. Les candidats sont\nautomatiquement classés et\ncomparés en fonction de leur\nperformance au test",
  },
  {
    title: "Éditeur de questions",
    img: "./Home-Candidat-Drawer-Profil.png",
    description:
      "Créez des challenges et\nexercices de programmation\nqui répondent aux besoins de\nvotre entreprise. C'est la\nmeilleure façon d'estimer si\nun(e) candidat(e) saura\ns'adapter à vos problématiques\nmétier une fois en poste !",
  },
  {
    title: "Intégration API & ATS",
    img: "./test-screen.png",
    description:
      "Intégrez facilement\nSkillsApply Plateforme à\nvotre système en utilisant votre\nApplicant Tracking System\n(ATS) favori pour gérer vos\ncandidats.",
  },
  {
    title: "Entretien technique à distance",
    img: "./candidat-screen.png",
    description:
      "Construire des équipes tech\nsolides nécessite plus que des\ncompétences techniques.\nCapacité de travailler en\néquipe, empathie, motivation :\ndécouvrez les soft skills de vos\ncandidats sans avoir à basculer\nsur un outil externe de\nvidéoconférence.",
  },
];
export default function Features() {
  return (
    <div>
      <Header
        title={"Découvrer\nnos fonctionnalités"}
        subtitle={
          "La solution tout-en-un pour évaluer et interviewer\nles développeurs"
        }
        Iconsvg={FeaturesLogo}
        leftoright={true}
      />
      {data.map((item, index) => (
        <div>
          <div
            className="features_title_container"
            style={{
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            <p className="features_title">{item.title}</p>
            <Box boxShadow={0} id="features_line"></Box>
          </div>
          <div
            className="titleAndLine"
            style={{
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            <img src={item.img} id="features_img" />
            <p id="img_description">{item.description}</p>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}
