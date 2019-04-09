import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import background from "./background.jpg";
// import portfolio from "./components/portfolio";
// import Button from "muicss/lib/react/button";

import "./App.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.main = React.createRef();
  }
  //   handleScroll = e => {
  //     e.preventDefault();
  //     const main = this.main.current;
  //     window.scrollTo({
  //       top: main.offsetTop,
  //       left: 0,
  //       behavior: "instant"
  //     });
  //   };
  //   renderMain() {
  //     return (
  //       <div>
  //         <div>
  //           <h1>Home</h1>
  //         </div>
  //         <div ref={this.main}>
  //           <h1>Portfolio</h1>
  //         </div>
  //       </div>
  //     );
  //   }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={background} className="background" alt="clouds" />
          <p aria-multiline="true">Lidia Davidson</p>
          <BrowserRouter>
            <Link style={Link} onClick={this.handleScroll} to="/portfolio">
              Portfolio{" "}
            </Link>

            {/* <Button
              color="primary"
              onClick={this.portfolio.bind(this) && <portfolio />}
            >
              Portfolio
            </Button> */}
            <Switch>
              <Route exact path="/" component={() => this.renderMain()} />

              <div className="col-lg-12 col-md-12 col-sm-12">
                <div id="contact" className="text-center">
                  <a id="portfolio-link" href="https://github.com/LidiaWebDev">
                    <i className="fab fa-github m-3 fa-2x" />
                  </a>

                  <a
                    id="portfolio-link"
                    href="https://www.linkedin.com/in/lidiadavidson/"
                  >
                    <i className="fab fa-linkedin m-3 fa-2x" />
                  </a>

                  <a id="portfolio-link" href="mailto:davidsonlidia@gmail.com">
                    <i className="fas fa-envelope-open m-3 fa-2x" />
                  </a>

                  <a
                    id="portfolio-link"
                    href="https://twitter.com/LidiaDa81393011"
                  >
                    <i className="fab fa-twitter m-3 fa-2x" />
                  </a>
                </div>
              </div>
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default Main;
