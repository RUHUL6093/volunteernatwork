import React from "react";
const Event = (props) => {
  const event = props.event;
  const { name, imageURL, discription } = event;

  return (
    <div className="col-md-3">
      <div className="m-3 shadow rounded p-3 h-100">
        <img className="img-fluid" src={imageURL} alt="" />
        <h3>{name}</h3>
      </div>
    </div>
  );
};
export default Event;
