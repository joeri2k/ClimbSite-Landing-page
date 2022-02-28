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

export default function SignUp() {
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user_signup_info = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      password_confirmation: data.get("confirm-password"),
    };
    console.log(user_signup_info);
    const url = "http://127.0.0.1:8000/api/auth/register";
    try {
      const response = await axios.post(url, user_signup_info);
      const data_received = await response.data;
      console.log(data_received);
      navigate("/login");
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
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  InputLabelProps={{
                    style: { color: "#fff" },
                  }}
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  InputLabelProps={{
                    style: { color: "#fff" },
                  }}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  InputLabelProps={{
                    style: { color: "#fff" },
                  }}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  InputLabelProps={{
                    style: { color: "#fff" },
                  }}
                  required
                  fullWidth
                  name="confirm-password"
                  label="confirm-password"
                  type="password"
                  id="confirm-password"
                  autoComplete="confirm-password"
                />
              </Grid>
            </Grid>
            <Button
              style={{ backgroundColor: "#1B8B6A" }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
