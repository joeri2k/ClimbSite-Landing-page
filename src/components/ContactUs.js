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

export default function ContactUs() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "white ", textAlign: "center" }}>Contact Us</h1>
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            // onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              margin="normal"
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
              fullWidth
              name="message"
              label="Message"
              type="text"
              id="message"
              autoComplete="message"
            />
            <Button
              style={{ backgroundColor: "#1B8B6A" }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
