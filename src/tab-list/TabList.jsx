import "./style.css";
import Button from "./button/Button";
import { useState } from "react";

function TabList({ tabs, defaultSelection = 2 }) {
  const [selectedindex, setSelectedIndex] = useState(defaultSelection);
  function handleClick(index) {
    return () => {
      setSelectedIndex(index);
    };
  }

  const Component = tabs[selectedindex].Component;
  return (
    <>
      <div>
        {tabs.map((tab, index) => {
          return (
            <Button
              label={tab.label}
              onClick={handleClick(index)}
              key={tab.id}
              data-selected={index === selectedindex}
            />
          );
        })}
      </div>
      <div>
        <Component />
      </div>
    </>
  );
}

export default TabList;
