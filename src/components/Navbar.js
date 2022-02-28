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
        style={{ backgroundColor: "transparent" }}
        position="static"
        color="default"
        elevation={0}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography sx={{ flexGrow: 1 }} variant="h5" color="inherit" noWrap>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              ClimbSite
            </Link>
          </Typography>

          <nav>
            <Link to="/signup">
              <Button
                variant="outlined"
                sx={{ my: 1, mx: 1.5 }}
                style={{ color: "white", borderColor: "white" }}
              >
                Signup
              </Button>
            </Link>
            <Link to="/login">
              <Button
                variant="outlined"
                style={{ color: "white", borderColor: "white" }}
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
