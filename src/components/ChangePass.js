import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from "axios";

import Container from "@mui/material/Container";

export default function ChangePass({ handleClose }) {
  const token = localStorage.getItem("token");
  async function handleEdit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const info = {
      email: data.get("email"),
      password: data.get("password"),
      new_password: data.get("new_password"),
    };

    const url = "http://127.0.0.1:8000/api/auth/edit-password";
    try {
      const response = await axios.post(url, info, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data_received = await response.data;
      console.log(data_received);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Container
        component="main"
        maxWidth="xs"
        style={{
          backgroundColor: "#2F3F4A",
          borderRadius: "15px",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CssBaseline />
        <span className="close-icon" onClick={handleClose}>
          x
        </span>

        <Box
          style={{ padding: "15px", marginTop: "20px" }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box component="form" onSubmit={handleEdit} noValidate sx={{ mt: 1 }}>
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
              id="password"
              label="Password"
              type="password"
              name="password"
              autoComplete="password"
            />
            <TextField
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              margin="normal"
              required
              fullWidth
              id="new_password"
              label="New Password"
              type="password"
              name="new_password"
              autoComplete="new_password"
            />
            <Button
              style={{ backgroundColor: "#1B8B6A" }}
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Edit
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
