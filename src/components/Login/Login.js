import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfiq from "./firebaseConfiq";
firebase.initializeApp(firebaseConfiq);

const Login = () => {
  return (
    <div>
      <h1>This is destination</h1>
    </div>
  );
};
export default Login;
