import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import Weather from "./Weather";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
