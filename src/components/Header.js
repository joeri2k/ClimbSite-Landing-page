import { IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { Link as Scroll } from "react-scroll";

function Header() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
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
        <h1
          style={{
            color: "white ",
            fontSize: "60px",
            textAlign: "center",
            fontFamily: "Nunito",
            fontWeight: "bold",
          }}
        >
          Welcome to <br />
          <span style={{ color: "#1B8B6A" }}>Climb</span>Site
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Scroll to="down" smooth={true}>
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
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}

export default Header;
