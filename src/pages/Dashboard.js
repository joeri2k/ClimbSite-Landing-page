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
import Popup from "../components/Popup";
import Editinfo from "../components/Editinfo";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

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
  // async function handleEdit(event) {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const user_edited_info = {
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   };
  //   console.log(user_login_info);
  //   const url = "http://127.0.0.1:8000/api/auth/login";
  //   try {
  //     const response = await axios.post(url, user_login_info);
  //     const data_received = await response.data;
  //     console.log(data_received);
  //     localStorage.setItem("token", data_received.access_token);
  //     localStorage.setItem("name", data_received.user.name);
  //     localStorage.setItem("email", data_received.user.email);
  //     //setLoggedIn(true);
  //     navigate("/dashboard");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

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
              // onSubmit={handleEdit}
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
                onClick={togglePopup}
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
              >
                Edit
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
      {isOpen && <Popup content={<Editinfo />} handleClose={togglePopup} />}
    </div>
  );
};

export default Dashboard;
