import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function InfoClock({ text, title }) {
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
  );
}
