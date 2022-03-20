import React from "react";

const Dial = (props) => {
  return (
    <div style={{ border: "3px solid gray", margin: "10px" }}>
      <h3>This is dial</h3>
      <p>Steps: {props.steps}</p>
    </div>
  );
};

export default Dial;
