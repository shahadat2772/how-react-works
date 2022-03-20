import React, { useEffect, useState } from "react";
import Display from "../Display/Display";

const Watch = () => {
  let [steps, setSteps] = useState(0);
  const steped = () => {
    const newStepCount = steps + 1;
    // steps += 1;
    setSteps(newStepCount);
    // console.log(steps);
  };

  useEffect(() => {
    console.log(steps);
  }, [steps]);

  return (
    <div style={{ border: "3px solid purple", margin: "10px" }}>
      <h1>{steps}</h1>
      <h1>This is Watch</h1>
      <button onClick={steped}>Steped</button>
      <Display name="Garmin" steps={steps}></Display>
    </div>
  );
};

export default Watch;
