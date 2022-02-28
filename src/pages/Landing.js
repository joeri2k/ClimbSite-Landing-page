import SliderImage from "../components/SliderImage";
import React from "react";
import { CssBaseline } from "@mui/material";
import Header from "../components/Header";
import InfoBlock from "../components/InfoBlock";

const Landing = () => {
  return (
    <div>
      <CssBaseline />
      <Header />
      <SliderImage />
      <InfoBlock />
    </div>
  );
};

export default Landing;
