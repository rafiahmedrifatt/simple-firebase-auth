import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-6">
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/emailPass">Login Using Email & Password</NavLink>
    </div>
  );
};

export default Navbar;
