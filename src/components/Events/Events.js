import React from "react";
import fakedata from "../FakeData/fakeData.json";
import Event from "../Event/Event";
const Events = () => {
  // console.log(fakedata);
  return (
    <div className="row">
    { fakedata.map(e => <Event event={e}></Event> ) }
    </div>
  );
};
export default Events;
