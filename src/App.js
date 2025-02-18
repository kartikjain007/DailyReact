// import React, { useEffect, useState } from "react";
import "./App.css";
import TabList from "./tab-list";

const tabs = [
  {
    id: 0,
    label: "Component A",
    Component: ComponentA,
  },
  {
    id: 1,
    label: "Component B",
    Component: ComponentB,
  },
  {
    id: 2,
    label: "Component C",
    Component: ComponentC,
  },
  {
    id: 3,
    label: "Component D",
    Component: ComponentD,
  },
];

function ComponentA() {
  return <>ComponentA</>;
}
function ComponentB() {
  return <>ComponentB</>;
}
function ComponentC() {
  return <>ComponentC</>;
}
function ComponentD() {
  return <>ComponentD</>;
}

export default function App() {
  return (
    <>
      <TabList tabs={tabs} />
    </>
  );
}

// Log to console
// console.log("Hello console");
