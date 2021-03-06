import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from "axios";
import Container from "@mui/material/Container";

export default function EditEmail({ handleClose }) {
  const [message, setMessage] = useState(null);
  const token = localStorage.getItem("token");

  async function handleEdit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const changed_email = {
      email: data.get("email"),
    };

    const url = "http://127.0.0.1:8000/api/auth/edit-profile";
    try {
      const response = await axios.post(url, changed_email, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data_received = await response.data;
      console.log(data_received);
      event.target.reset();
      setMessage("success");
    } catch (error) {
      console.log(error);
      setMessage("error");
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
            <Button
              style={{ backgroundColor: "#1B8B6A" }}
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Edit
            </Button>
          </Box>
          {message === "success" ? (
            <div
              style={{
                justifySelf: "center",
                color: "#1B8B6A",
              }}
            >
              You've edited your email.
            </div>
          ) : (
            <></>
          )}
          {message === "error" ? (
            <div
              style={{
                justifySelf: "center",
                color: "#A05B5B",
              }}
            >
              Enter an email to edit.
            </div>
          ) : (
            <></>
          )}
        </Box>
      </Container>
    </div>
  );
}
