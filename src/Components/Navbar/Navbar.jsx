import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  console.log(user);
  return (
    <div className="flex items-center justify-center gap-6">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" href="/">
            Rafi Ahmed Rifat
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {user ? (
              <>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "border-b-4 border-blue-500 rounded-none" : ""
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      isActive ? "border-b-4 border-blue-500 rounded-none" : ""
                    }
                  >
                    Blogs
                  </NavLink>
                </li>
              </>
            ) : (
              <>
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
              </>
            )}
            {user ? (
              <>
                <button
                  onClick={() => signOutUser()}
                  className="btn btn-secondary mx-5"
                >
                  {user.email}
                </button>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
