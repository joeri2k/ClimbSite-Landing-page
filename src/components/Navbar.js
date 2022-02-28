import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        style={{
          backgroundColor: "transparent",
          marginLeft: "-40px",
          zIndex: "2",
        }}
        position="sticky"
        color="default"
        elevation={0}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography
            sx={{ flexGrow: 1, my: 1, mx: 10 }}
            variant="h5"
            color="inherit"
            noWrap
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                fontFamily: "Nunito",
              }}
            >
              <span style={{ fontWeight: "bold", fontSize: "30px" }}>
                <span style={{ color: "#1B8B6A" }}>Climb</span>Site
              </span>
            </Link>
          </Typography>

          <nav>
            <Link to="/signup">
              <Button
                variant="outlined"
                sx={{ my: 1, mx: 1.5 }}
                style={{
                  color: "#1B8B6A",
                  backgroundColor: "#122222",
                  borderColor: "#1B8B6A",
                }}
              >
                Signup
              </Button>
            </Link>
            <Link to="/login">
              <Button
                variant="outlined"
                style={{
                  color: "#1B8B6A",
                  backgroundColor: "#122222",
                  borderColor: "#1B8B6A",
                }}
                sx={{ my: 1, mx: 1.5 }}
              >
                Login
              </Button>
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Navbar;
