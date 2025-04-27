import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase.init";
import { BsEmojiExpressionless, BsEmojiNeutral } from "react-icons/bs";
import { Link } from "react-router";

const EmailPassword = () => {
  const [seePassword, setSeePassword] = useState(false);

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
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
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
              type={seePassword ? "text" : "password"}
              name="password"
              placeholder="password"
              required
            />
            <button onClick={() => setSeePassword(!seePassword)}>
              {seePassword ? (
                <BsEmojiExpressionless size={20} />
              ) : (
                <BsEmojiNeutral size={20} />
              )}
            </button>
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
          <button className="btn btn-neutral">Join</button>
        </div>
      </form>
      <h1>
        Already have an Account?{" "}
        <Link to="/login" className="border-b-2 border-blue-400">
          Login
        </Link>
      </h1>
    </div>
  );
};

export default EmailPassword;
