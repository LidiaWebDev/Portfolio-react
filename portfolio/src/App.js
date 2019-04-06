import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import background from "./background.jpg";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={background} className="background" alt="flowers" />
          <p contentEditable role="textbox" aria-multiline="true">
            Lidia Davidson
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Learn React */}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
