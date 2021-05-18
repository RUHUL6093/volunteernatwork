import React from "react";
import Events from "../Events/Events";
const Home = () => {
  return (
    <div className="container">
      <div className="m-5">
        <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
        <div className="d-flex justify-content-center">
          <input
            className="form-control"
            type="text"
            placeholder="Search...."
          />
          <button className="btn btn-primary"> Search </button>
        </div>
      </div>
      <Events />
    </div>
  );
};
export default Home;
