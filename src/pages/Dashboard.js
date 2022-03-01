import axios from "axios";
import { useState, useEffect } from "react";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const url = "http://127.0.0.1:8000/api/auth/user-profile";
  const token = localStorage.getItem("token");
  useEffect(() => {
    async function handleSubmit() {
      try {
        const response = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data_received = await response.data;

        setName(data_received.name);
        setEmail(data_received.email);
      } catch (error) {
        console.log(error);
      }
    }
    handleSubmit();
  }, []);

  return (
    <div style={{ backgroundColor: "#122222" }}>
      <NavbarLoggedIn style={{ backgroundColor: "" }} />
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "50px",
          color: "white",
        }}
      >
        <h1 style={{ color: "white ", textAlign: "center", fontSize: "50px" }}>
          {name}
        </h1>

        <Container
          component="main"
          maxWidth="xs"
          style={{
            backgroundColor: "#2F3F4A",
            borderRadius: "15px",
            color: "white",
          }}
        >
          <CssBaseline />
          <Box
            style={{ padding: "20px" }}
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#1B8B6A" }}></Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                style={{ backgroundColor: "#1B8B6A" }}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                LogIn
              </Button>

              <Typography variant="body2">
                <Link
                  style={{
                    color: "#000075",
                  }}
                  to="/signup"
                >
                  Don't have an account? Sign Up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
