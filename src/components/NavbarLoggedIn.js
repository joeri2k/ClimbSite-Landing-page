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
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar
          sx={{ flexWrap: "wrap" }}
          style={{ backgroundColor: "#1B8B6A" }}
        >
          <Typography sx={{ flexGrow: 1 }} variant="h5" color="inherit" noWrap>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              ClimbSite
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Navbar;
