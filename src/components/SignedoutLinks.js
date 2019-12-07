import React from "react";
import { Link } from "react-router-dom";

const SignedoutLinks = () => {
  return (
    <div className="links">
      <ul>
        <li>
          <Link to="/signup">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default SignedoutLinks;
