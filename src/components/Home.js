import React from "react";
import Captions from "./Captions";
import jwtDecode from "jwt-decode";

const Home = () => {
  const token = localStorage.getItem("auth-token");

  let user;
  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 > Date.now()) {
      user = decodedToken._id;
    }
  }
  return (
    <div className="home">
      <Captions user={user} />
    </div>
  );
};

export default Home;
