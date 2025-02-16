import "./style.css";
import Button from "../button";

function Suggestions({ suggestions }) {
  return (
    <div className="suggestions">
      {suggestions.map((suggestion) => {
        return <ListItem suggestion={suggestion} key={suggestion} />;
      })}
    </div>
  );
}

export default Suggestions;

function ListItem({ suggestion }) {
  return <Button label={suggestion} />;
}
