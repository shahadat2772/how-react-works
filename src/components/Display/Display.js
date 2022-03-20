import React from "react";
import Dial from "../Dial/Dial";

const Display = (props) => {
  return (
    <div style={{ border: "3px solid blue", margin: "10px" }}>
      <h2>Name: {props.name}</h2>
      <h2>Steps: {props.steps}</h2>
      <Dial steps={props.steps}></Dial>
    </div>
  );
};

export default Display;
