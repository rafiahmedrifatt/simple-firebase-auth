import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const { user } = use(AuthContext);
  console.log(user);
  return (
    <div className="flex items-center justify-center gap-6">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Rafi Ahmed Rifat</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "border-b-4 border-blue-500 rounded-none" : ""
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/emailPass"
                className={({ isActive }) =>
                  isActive ? "border-b-4 border-blue-500 rounded-none" : ""
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
