import "./style.css";
import Button from "../button";

function Suggestions({ isLoading, suggestions, onSelect, selectedSuggestion }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="suggestions">
      {suggestions.map((suggestion) => {
        return (
          <ListItem
            onSelect={onSelect}
            suggestion={suggestion}
            key={suggestion}
            selectedSuggestion={selectedSuggestion}
          />
        );
      })}
    </div>
  );
}

export default Suggestions;

function ListItem({ suggestion, onSelect, selectedSuggestion }) {
  function handleSelect() {
    onSelect(suggestion);
  }
  return (
    <Button
      data-selected={
        suggestion.toLowerCase() === selectedSuggestion.toLowerCase()
      }
      label={suggestion}
      onClick={handleSelect}
    />
  );
}
