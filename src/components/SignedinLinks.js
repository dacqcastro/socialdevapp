import React from "react";
import { Link } from "react-router-dom";

const SignedinLinks = () => {
  const logOut = () => {
    const token = localStorage.getItem("auth-token");

    if (token) localStorage.removeItem("auth-token");

    window.location.reload(true);
  };

  return (
    <div className="links">
      <ul>
        <li>
          <Link to="/create">Create Caption</Link>
        </li>
        <li id="logout" onClick={logOut}>
          Logout
        </li>
      </ul>
    </div>
  );
};

export default SignedinLinks;
