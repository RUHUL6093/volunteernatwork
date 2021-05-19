import React from "react";
import { Link } from "react-router-dom";
const Event = (props) => {
  const event = props.event;
  const { name, imageURL, discription } = event;

  return (
    <div className="col-md-3">
      <Link to="/registerEvent">
        <div className="m-3 shadow rounded p-3 h-100">
          <img className="img-fluid" src={imageURL} alt="" />
          <h3>{name}</h3>
        </div>
      </Link>
    </div>
  );
};
export default Event;
