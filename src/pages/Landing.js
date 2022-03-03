import SliderImage from "../components/SliderImage";
import React from "react";
import { CssBaseline } from "@mui/material";
import Header from "../components/Header";
import InfoBlock from "../components/InfoBlock";
import ContactUs from "../components/ContactUs";
import Navbar from "../components/Navbar";
import bg from "../images/bg.jpg";

const Landing = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <CssBaseline />
      <div>
        <Header />
      </div>
      <div id="down" style={{ backgroundColor: "#122222" }}>
        <SliderImage />
      </div>
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div style={{ backgroundColor: "rgb(0,0,0,0.6)" }}>
          <InfoBlock
            text="Built by a climber for lebanese climbers, 
        it shows all the climbing and bouldering sites in Lebanon and shows all 
        the routes and info needed for each one of them and climbers can track their progress.
        Knowing the situation in Lebanon it’s harder to buy a new climbing gear or doesn’t have a ride
        and this app solves this problem for lebanese climbers"
            title="About Us"
          />
        </div>
      </div>
      <div style={{ backgroundColor: "#122222" }}>
        <InfoBlock
          text="ClimbSite is a logging app that allows users to log and rate climbs,
          leave comments. The app is easy to navigate, offers guidebooks to the
          spot of your choosing. You can add climbing areas to your log page by
          favoriting them. Through its logbook features, climbers can track
          their own climbing endeavors, follow friends and log an event so other
          climbers can join."
          title="Services"
        />
      </div>
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div style={{ backgroundColor: "rgb(0,0,0,0.6)" }}>
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default Landing;
