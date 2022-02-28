import { IconButton } from "@material-ui/core";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "white ", fontSize: "60px", textAlign: "center" }}>
        Welcome to <br />
        <span
          style={{
            borderRadius: "50px",
            backgroundColor: "#122222",
            padding: "10px",
            fontWeight: "bold",
            fontFamily: "Nunito",
          }}
        >
          <span style={{ color: "#1B8B6A" }}>Climb</span>Site
        </span>
      </h1>
      <IconButton style={{ marginTop: "100px" }}>
        <ExpandMoreIcon
          style={{
            backgroundColor: "#1B8B6A",
            borderRadius: "100px",
            fontSize: "80px",
            color: "white",
          }}
        />
      </IconButton>
    </div>
  );
}

export default Header;
