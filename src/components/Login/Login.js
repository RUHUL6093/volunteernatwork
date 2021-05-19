import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfiq from "./firebaseConfiq";
// firebase.initializeApp(firebaseConfiq);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfiq);
}

const Login = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleGooogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleFbSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((result) => {
        var user = result.user;
        console.log(user);
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="container m-5">
      <button
        onClick={handleGooogleSignIn}
        className="btn btn-primary text-center"
      >
        {" "}
        Continue With Google
      </button>
      <div>
        <button
          onClick={handleFbSignIn}
          className="btn btn-primary text-center"
        >
          {" "}
          Continue With Fcaebook
        </button>
      </div>
    </div>
  );
};
export default Login;
