import React, { useState } from "react";
import InputText from "./input-text";
import Button from "./button";
import Suggestions from "./suggestions";
import "./style.css";

function AutoComplete({ suggestions, isLoading }) {
  const [query, setQuery] = useState("");
  const [showList, setShowList] = useState(false);

  function handleQueryChange(value) {
    setQuery(value);
    setShowList(true);
  }

  function handleClear() {
    setQuery("");
  }

  function handleSuggestionSelect(selectedSuggestion) {
    setQuery(selectedSuggestion);
    setShowList(false);
  }

  const filteredQuery = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(query.toLowerCase())
  );

  let showSuggestion = !!query.length && showList;

  if (isLoading && query.length) {
    showSuggestion = true;
  }

  return (
    <div className="auto-complete">
      <div>
        <InputText value={query} onChange={handleQueryChange} />
        <Button label="Clear" onClick={handleClear} />
      </div>

      {showSuggestion && (
        <Suggestions
          isLoading={isLoading}
          onSelect={handleSuggestionSelect}
          suggestions={filteredQuery}
          selectedSuggestion={query}
        />
      )}
    </div>
  );
}

export default AutoComplete;
