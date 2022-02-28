import * as React from "react";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { makeStyles } from "@material-ui/core/styles";
import bg from "./images/bg.jpg";
import { CssBaseline } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  opacity: {
    backgroundColor: "rgb(0,0,0,0.6)",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.opacity}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
