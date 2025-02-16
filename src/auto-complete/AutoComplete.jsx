import React, { useState } from "react";
import InputText from "./input-text";
import Button from "./button";
import Suggestions from "./suggestions";
import "./style.css";

function AutoComplete({ suggestions }) {
  const [query, setQuery] = useState("");

  function handleQueryChange(value) {
    setQuery(value);
  }

  function handleClear() {
    setQuery("");
  }

  const filteredQuery = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="auto-complete">
      <div>
        <InputText value={query} onChange={handleQueryChange} />
        <Button label="Clear" onClick={handleClear} />
      </div>

      {!!query.length && <Suggestions suggestions={filteredQuery} />}
    </div>
  );
}

export default AutoComplete;
