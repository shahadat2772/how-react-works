import { useState } from "react";
import "./App.css";
import Details from "./components/Details/Details";
import Device from "./components/Device/Device";
import Watch from "./components/Watch/Watch";

function App() {
  return (
    <div style={{ border: "3px solid green", margin: "10px" }} className="App">
      <Device name="UPhone" price="1224"></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
