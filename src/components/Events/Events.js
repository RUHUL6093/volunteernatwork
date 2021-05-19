import React from "react";
import fakedata from "../FakeData/fakeData.json";
import Event from "../Event/Event";
const Events = () => {
  // console.log(fakedata);
  const handleAllEvents = () => {
    fetch("https://9wtjs.sse.codesandbox.io/addEvents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fakedata)
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="row">
      <button onClick={handleAllEvents}> Add All</button>
      {fakedata.map((e) => (
        <Event event={e}></Event>
      ))}
    </div>
  );
};
export default Events;
