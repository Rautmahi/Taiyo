import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div style={{ width: "100%", height: "60px", backgroundColor: "teal"}}></div>
      <div style={{ width: "20%", height: "700px", border: "1px solid teal" }}>
        <Link to="/contactpage">
          <h2>Contact page</h2>
        </Link>
        <hr />
        <Link to="/charts&maps">
          <h2>Charts and Maps</h2>
        </Link>
        <hr />
      </div>
    </>
  );
};

export default Navbar;
