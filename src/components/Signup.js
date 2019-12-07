import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const submitForm = e => {
    e.preventDefault();
    console.log(newUser);
    axios
      .post("/api/register", {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password
      })
      .then(res => {
        console.log(res);
        setNewUser({
          name: "",
          email: "",
          password: ""
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  const formChange = e => {
    setNewUser({
      ...newUser,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="Signup">
      <div className="container">
        <h2>Signup</h2>
        <form onSubmit={submitForm}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={newUser.name}
            onChange={formChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={newUser.email}
            onChange={formChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={newUser.password}
            onChange={formChange}
          />
          <input type="submit" id="btn" />
        </form>
        <p className="redirect">
          Already h ave an account? Login <Link to="/login">here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
