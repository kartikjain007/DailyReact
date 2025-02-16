import React from "react";
import AutoComplete from "./auto-complete/AutoComplete.jsx";
import "./App.css";
const suggestions = ["Apple", "Banana", "Orange", "Grapes", "Papaya"];
export default function App(props) {
  return (
    <div className="App">
      <AutoComplete suggestions={suggestions} />
    </div>
  );
}

// Log to console
console.log("Hello console");
