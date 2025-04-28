import React from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const signInWithEmailPassword = () => {
    return;
  };

  const userFunctions = {};
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
