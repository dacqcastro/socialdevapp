import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";

import axios from "axios";

// Components import
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateCaption from "./components/CreateCaption";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AuthRoute from "./components/AuthRoute";
import PrivateRoute from "./components/PrivateRoute";

axios.defaults.baseURL = "https://socialappp.herokuapp.com/";

const token = localStorage.getItem("auth-token");

let authenticated;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    authenticated = false;
  } else {
    authenticated = true;
  }
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar authenticated={authenticated} />
        <Route exact path="/" component={Home} />
        <PrivateRoute
          path="/create"
          component={CreateCaption}
          authenticated={authenticated}
        />
        <AuthRoute
          path="/login"
          component={Login}
          authenticated={authenticated}
        />
        <AuthRoute
          path="/signup"
          component={Signup}
          authenticated={authenticated}
        />
      </div>
    </Router>
  );
}

export default App;
