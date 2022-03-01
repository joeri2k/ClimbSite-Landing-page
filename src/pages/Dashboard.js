import NavbarLoggedIn from "../components/NavbarLoggedIn";
import bg from "../images/bg.jpg";

const Dashboard = () => {
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
        <span>{localStorage.getItem("name")}</span>
        <br />
        <span>{localStorage.getItem("email")}</span>
        <br />
        <span>{localStorage.getItem("token")}</span>
      </div>
    </div>
  );
};

export default Dashboard;
