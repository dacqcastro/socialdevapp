import React from "react";
import SignedinLinks from "./SignedinLinks";
import SignedoutLinks from "./SignedoutLinks";
import { Link } from "react-router-dom";

const Navbar = ({ authenticated }) => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h1>DevTweets</h1>
          </Link>
        </div>
        {authenticated ? <SignedinLinks /> : <SignedoutLinks />}
      </div>
    </div>
  );
};

export default Navbar;
