import React, { useEffect, useState } from "react";
import AutoComplete from "./auto-complete/AutoComplete.jsx";
import "./App.css";

const Suggestions = ["Apple", "Banana", "Orange", "Grapes", "Papaya"];
export default function App() {
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    new Promise(function (resolve) {
      setTimeout(() => {
        resolve(Suggestions);
      }, 5000);
    }).then((data) => {
      setIsLoading(false);
      setSuggestions(data);
    });
  }, []);
  return (
    <div className="App">
      <AutoComplete isLoading={isLoading} suggestions={suggestions} />
    </div>
  );
}

// Log to console
// console.log("Hello console");
