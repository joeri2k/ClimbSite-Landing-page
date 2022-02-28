import { IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

function Header() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  });
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
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedheight={50}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ color: "white ", fontSize: "60px", textAlign: "center" }}>
          Welcome to <br />
          <span
            style={{
              borderRadius: "30px",
              backgroundColor: "#122222",
              padding: "10px",
              fontWeight: "bold",
              fontFamily: "Nunito",
            }}
          >
            <span style={{ color: "#1B8B6A" }}>Climb</span>Site
          </span>
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <IconButton
            style={{
              marginTop: "100px",
            }}
          >
            <ExpandMoreIcon
              style={{
                backgroundColor: "#1B8B6A",
                borderRadius: "100px",
                fontSize: "50px",
                color: "white",
              }}
            />
          </IconButton>
        </div>
      </Collapse>
    </div>
  );
}

export default Header;
