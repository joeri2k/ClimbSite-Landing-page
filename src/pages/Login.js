import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  //const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user_login_info = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(user_login_info);
    const url = "http://127.0.0.1:8000/api/auth/login";
    try {
      const response = await axios.post(url, user_login_info);
      const data_received = await response.data;
      console.log(data_received);
      localStorage.setItem("token", data_received.access_token);
      localStorage.setItem("name", data_received.user.name);
      localStorage.setItem("email", data_received.user.email);
      //setLoggedIn(true);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={{ height: "100vh" }}>
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
          <Avatar sx={{ m: 1, bgcolor: "#1B8B6A" }}>
            <LockOutlinedIcon />
          </Avatar>
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
              autoFocus
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
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
