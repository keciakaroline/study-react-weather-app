import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import Weather from "./Weather";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <div class="footer">
        <div class="code-by">
          <p>
            <a
              href="https://github.com/keciasantos/react-weather-app"
              target="_blank"
            >
              Open-source code{" "}
            </a>
            by Kécia Santos, hosted on
            <a href="https://www.netlify.com/" target="_blank">
              {" "}
              Netlify{" "}
            </a>
          </p>
        </div>
        <div class="social-link">
          <a
            href="https://github.com/keciasantos"
            target="_blank"
            title="GitHub page - Kécia Santos"
            alt="GitHub page"
          ></a>
          <a
            href="https://www.linkedin.com/in/keciasantos/"
            target="_blank"
            title="Linkedin page - Kécia Santos"
            alt="Linkedin page"
          ></a>
        </div>
      </div>
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
