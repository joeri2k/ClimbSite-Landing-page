import React from "react";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ color: "white ", fontSize: "60px", textAlign: "center" }}>
        Welcome to <br />
        <span
          style={{
            borderRadius: "50px",
            backgroundColor: "#122222",
            padding: "10px",
            fontWeight: "bold",
            fontFamily: "Nunito",
          }}
        >
          <span style={{ color: "#1B8B6A" }}>Climb</span>Site
        </span>
      </h1>
    </div>
  );
}

export default Header;
