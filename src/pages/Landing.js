import SliderImage from "../components/SliderImage";
import React from "react";
import { CssBaseline } from "@mui/material";
import Header from "../components/Header";

const Landing = () => {
  return (
    <div>
      <CssBaseline />
      <Header />
      <SliderImage />
    </div>
  );
};

export default Landing;
