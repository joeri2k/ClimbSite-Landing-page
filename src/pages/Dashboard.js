import axios from "axios";
import { useState, useEffect } from "react";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

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
        console.log(data_received);
        setName(data_received.name);
        setEmail(data_received.email);
      } catch (error) {
        console.log(error);
      }
    }
    handleSubmit();
  }, []);

  return (
    <div>
      <NavbarLoggedIn />
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "50px",
          color: "white",
        }}
      >
        <h1 style={{ color: "white ", textAlign: "center" }}>{title}</h1>

        <Container
          component="main"
          maxWidth="sm"
          style={{
            backgroundColor: "#2F3F4A",
            borderRadius: "15px",
            color: "white",
          }}
        >
          <CssBaseline />
          <Box
            style={{
              padding: "20px",
              fontSize: "18px",
              lineHeight: "30px",
              textAlign: "justify",
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {text}
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
