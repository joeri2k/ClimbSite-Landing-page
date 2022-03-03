import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function SignUp() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const url = "http://127.0.0.1:8000/api/auth/register";

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (!(data.get("email") && data.get("password") && data.get("name"))) {
      setError("empty");
    } else if (data.get("password").length < 7) {
      setError("weak");
    } else if (!(data.get("password") === data.get("confirm-password"))) {
      setError("confirm");
    } else {
      const user_signup_info = {
        name: data.get("name"),
        email: data.get("email"),
        password: data.get("password"),
        password_confirmation: data.get("confirm-password"),
      };

      try {
        const response = await axios.post(url, user_signup_info);
        const data_received = await response.data;
        console.log(data_received);
        navigate("/login");
      } catch (error) {
        console.log(error);
        setError("already exist");
      }
    }
  }

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Navbar />
      <Container
        style={{
          backgroundColor: "#2F3F4A",
          color: "white",
          borderRadius: "15px",
        }}
        component="main"
        maxWidth="xs"
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "15px",
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
          {error === "empty" ? (
            <div
              style={{
                justifySelf: "center",
                color: "#A05B5B",
              }}
            >
              One of the required field is empty
            </div>
          ) : (
            <></>
          )}
          {error === "confirm" ? (
            <div
              style={{
                justifySelf: "center",
                color: "#A05B5B",
              }}
            >
              Your password and its confirmation do not match.
            </div>
          ) : (
            <></>
          )}
          {error === "already exist" ? (
            <div
              style={{
                justifySelf: "center",
                color: "#A05B5B",
              }}
            >
              This user already exist.
            </div>
          ) : (
            <></>
          )}
          {error === "weak" ? (
            <div
              style={{
                justifySelf: "center",
                color: "#A05B5B",
              }}
            >
              Password is weak.
            </div>
          ) : (
            <></>
          )}
        </Box>
      </Container>
    </div>
  );
}
