import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@material-ui/core/styles";
import MenuListLogged from "./BurgerLogged";

function NavbarLoggedIn() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  async function handleSubmit() {
    const url = "http://127.0.0.1:8000/api/auth/logout";
    try {
      const response = await axios.post(url, [], {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data_received = await response.data;
      console.log(data_received);
      if (data_received.message) {
        localStorage.clear();
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        style={{
          zIndex: "2",
          backgroundColor: "#2F3F4A",
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
            style={{
              color: "white",
              fontFamily: "Nunito",
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: "30px" }}>
              <span style={{ color: "#1B8B6A" }}>Climb</span>Site
            </span>
          </Typography>
          {isMatch ? (
            <MenuListLogged />
          ) : (
            <nav>
              <Button
                variant="outlined"
                sx={{ my: 1, mx: 1.5 }}
                onClick={handleSubmit}
                style={{
                  color: "#1B8B6A",
                  backgroundColor: "#122222",
                  borderColor: "#1B8B6A",
                }}
              >
                Logout
              </Button>
            </nav>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default NavbarLoggedIn;
