import axios from "axios";
import { useState, useEffect } from "react";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popup from "../components/Popup";
import EditName from "../components/EditName";
import EditEmail from "../components/EditEmail";

const Dashboard = () => {
  const [isOpen1, setIsOpen1] = useState(false);

  const togglePopup1 = () => {
    setIsOpen1(!isOpen1);
  };

  const [isOpen2, setIsOpen2] = useState(false);

  const togglePopup2 = () => {
    setIsOpen2(!isOpen2);
  };

  const [isOpen3, setIsOpen3] = useState(false);

  const togglePopup3 = () => {
    setIsOpen3(!isOpen3);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const url = "http://127.0.0.1:8000/api/auth/user-profile";
  const token = localStorage.getItem("token");
  useEffect(() => {
    async function getInfo() {
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
    getInfo();
  });

  return (
    <div style={{ fontFamily: "Roboto", backgroundColor: "#122222" }}>
      <NavbarLoggedIn />
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
              </Typography>

              <Button
                style={{ backgroundColor: "#1B8B6A" }}
                onClick={togglePopup2}
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
              >
                Edit name
              </Button>
              <Button
                style={{ backgroundColor: "#1B8B6A" }}
                onClick={togglePopup1}
                variant="contained"
                sx={{ m: 1 }}
              >
                Edit Email
              </Button>

              <Button
                style={{ backgroundColor: "#122222" }}
                onClick={togglePopup3}
                variant="contained"
              >
                Change password
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
      {isOpen1 && <Popup content={<EditEmail handleClose={togglePopup1} />} />}
      {isOpen2 && <Popup content={<EditName handleClose={togglePopup2} />} />}
      {/* {isOpen3 && <Popup content={<Editinfo handleClose={togglePopup3} />} />} */}
    </div>
  );
};

export default Dashboard;
