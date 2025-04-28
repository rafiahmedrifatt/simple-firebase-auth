import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.init";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const userFunctions = {
    signIn,
    createWithEmailAndPassword,
    signOutUser,
    user,
  };

  return <AuthContext value={userFunctions}>{children}</AuthContext>;
};

export default AuthProvider;
