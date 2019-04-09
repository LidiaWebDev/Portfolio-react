import React, { Component } from "react";
// import Main from "./components/main";
import Portfolio from "./components/portfolio";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import background from "./background.jpg";
import Button from "muicss/lib/react/button";

class App extends Component {
  render() {
    return (
      <div className="Main">
        <section className="Main-section">
          <p aria-multiline="true">Lidia Davidson</p>

          <img src={background} className="background" alt="clouds" />
          <div>
            <Router>
              {/* <Route exact path="/" component={Main} /> */}
              {/* <Route exact path="/portfolio" component={Portfolio} /> */}
              {/* <Route exact path="/login" component={Login} /> */}
            </Router>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12">
            <div id="contact" className="text-center">
              <a id="portfolio-link" href="https://github.com/LidiaWebDev">
                <i className="fab fa-github m-3 fa-3x" />
              </a>

              <a
                id="portfolio-link"
                href="https://www.linkedin.com/in/lidiadavidson/"
              >
                <i className="fab fa-linkedin m-3 fa-3x" />
              </a>

              <a id="portfolio-link" href="mailto:davidsonlidia@gmail.com">
                <i className="fas fa-envelope-open m-3 fa-3x" />
              </a>

              <a id="portfolio-link" href="https://twitter.com/LidiaDa81393011">
                <i className="fab fa-twitter m-3 fa-3x" />
              </a>
            </div>
          </div>
          <Button color="primary" onClick className>
            <a href={Portfolio}>Portfolio</a>
          </Button>
        </section>
      </div>
    );
  }
}

export default App;
