import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfiq from "./firebaseConfiq";
import { useHistory, useLocation } from "react-router-dom";
// firebase.initializeApp(firebaseConfiq);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfiq);
}

const Login = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGooogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const user = result.user;
        const loggedInUser = {
          name: user.displayName,
          email: user.email,
          img: user.photoURL
        };

        localStorage.setItem("user", JSON.stringify(loggedInUser));
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
      <div>
        <button
          onClick={handleGooogleSignIn}
          className="btn btn-primary text-center"
        >
          {" "}
          Continue With Google
        </button>
      </div>
      <br />
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
