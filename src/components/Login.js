import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const submitForm = e => {
    e.preventDefault();
    console.log(user);
    axios
      .post("/api/login", { email: user.email, password: user.password })
      .then(res => {
        console.log(res);
        setUser({
          email: "",
          password: ""
        });

        const token = localStorage.getItem("auth-token");

        if (token) localStorage.removeItem("auth-token");

        localStorage.setItem("auth-token", res.data);
        axios.defaults.headers.common["auth-token"] = res.data;

        window.location.reload(true);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const formChange = e => {
    setUser({
      ...user,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="Login">
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={submitForm}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={user.email}
            onChange={formChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={formChange}
          />
          <input type="submit" id="btn" />
        </form>
        <p className="redirect">
          Dont have an account? register <Link to="/signup">here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
