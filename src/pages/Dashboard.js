import axios from "axios";
import { useState, useEffect } from "react";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

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
    <div style={{ fontFamily: "Roboto", backgroundColor: "#122222" }}>
      <NavbarLoggedIn style={{ backgroundColor: "" }} />
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
        }}
      >
        <h1 style={{ color: "white ", textAlign: "center", fontSize: "40px" }}>
          My Profile
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
              display: "flex",
              flexDirection: "column",
              //alignItems: "center",
            }}
          >
            <Avatar
              style={{ alignSelf: "center" }}
              sx={{ m: 1, bgcolor: "#1B8B6A", width: 75, height: 75 }}
            ></Avatar>
            <Typography
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                alignSelf: "center",
              }}
              variant="h4"
            >
              {name}
            </Typography>
            <Box
              component="form"
              //onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 3 }}
            >
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontSize: "18px",
                }}
                align="left"
                component="p"
              >
                <span style={{ fontWeight: "bold" }}>Email : </span>
                {email} <br />
                <span style={{ fontWeight: "bold" }}>Info : </span>
                {email}
              </Typography>

              <Button
                style={{ backgroundColor: "#1B8B6A" }}
                type="submit"
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
              >
                Edit
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
