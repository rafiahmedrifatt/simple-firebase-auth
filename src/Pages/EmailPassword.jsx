import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth } from "../firebase/firebase.init";

const EmailPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit}>
        <h1 className="font-bold text-lg text-center">
          Register Using Email & Password
        </h1>
        <br />
        <div className="flex flex-col gap-5 w-72">
          <label className="input validator ">
            <input
              type="email"
              name="email"
              placeholder="mail@site.com"
              required
            />
          </label>
          <label className="input validator ">
            <input
              type="password"
              name="password"
              placeholder="password"
              required
            />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
          <button className="btn btn-neutral ">Join</button>
        </div>
      </form>
    </div>
  );
};

export default EmailPassword;
