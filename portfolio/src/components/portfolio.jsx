import React, { Component } from "react";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <section className="portfoliocontainer">
        <div>
          <h2 className="title">Portfolio</h2>
          <p>
            Feel free to check projects and homework assignments below. <br />
            For code and more information, check my{" "}
            <a href="https://github.com/LidiaWebDev/">GitHub</a> page.
          </p>
          <ul class="portfolio_items grid">
            <li class="col-sm-4 col-xs-6 xs-padding single_item branding">
              <figure class="portfolio_item">
                <img
                  src="img/med.jpg"
                  width="405px"
                  height="285px"
                  alt="Portfolio Item"
                />
                <div class="hover_effect">
                  <a href="https://better-health.herokuapp.com/">
                    <span class="comment">BetterHealth</span>
                  </a>
                </div>
              </figure>
            </li>
            <li class="col-sm-4 col-xs-6 xs-padding single_item photo">
              <figure class="portfolio_item">
                <img
                  src="img/tour.jpg"
                  width="405px"
                  height="285px"
                  alt="Portfolio Item"
                />
                <div class="hover_effect">
                  <a href=" https://avrybrdly93.github.io/Tour/">
                    <span class="comment"> Tour Project</span>
                  </a>
                </div>
              </figure>
              <li class="col-sm-4 col-xs-6 xs-padding single_item branding">
                <figure class="portfolio_item">
                  <img
                    src="img/psychic.jpg"
                    width="405px"
                    height="285px"
                    alt="Portfolio Item"
                  />
                  <div class="hover_effect">
                    <a href="https://lidiawebdev.github.io/Psychic-Game/">
                      <span class="comment">Psychic Game</span>
                    </a>
                  </div>
                </figure>
              </li>
              <li class="col-sm-4 col-xs-6 xs-padding single_item branding">
                <figure class="portfolio_item">
                  <img
                    src="img/crystals.jpg"
                    width="405px"
                    height="285px"
                    alt="Portfolio Item"
                  />
                  <div class="hover_effect">
                    <a href="https://lidiawebdev.github.io/unit-4-game/">
                      <span class="comment">Crystal Collector</span>
                    </a>
                  </div>
                </figure>
              </li>
              <li class="col-sm-4 col-xs-6 xs-padding single_item print">
                <figure class="portfolio_item">
                  <img
                    src="img/trivia.jpg"
                    width="405px"
                    height="285px"
                    alt="Portfolio Item"
                  />
                  <div class="hover_effect">
                    <a href="https://lidiawebdev.github.io/TriviaGame/">
                      <span class="comment">Trivia Game</span>
                    </a>
                  </div>
                </figure>
              </li>
              <li class="col-sm-4 col-xs-6 xs-padding single_item website">
                <figure class="portfolio_item">
                  <img
                    src="img/gifs.jpg"
                    width="405px"
                    height="285px"
                    alt="Portfolio Item"
                  />
                  <div class="hover_effect">
                    <a href="https://lidiawebdev.github.io/GifTastic/">
                      <span class="comment">GifTastic</span>
                    </a>
                  </div>
                </figure>
              </li>

              <li class="col-sm-4 col-xs-6 xs-padding single_item branding">
                <figure class="portfolio_item">
                  <img
                    src="img/burger.jpg"
                    width="405px"
                    height="285px"
                    alt="burger"
                  />
                  <div class="hover_effect">
                    <a href="https://immense-cliffs-12673.herokuapp.com">
                      <span class="comment">Burger App</span>
                    </a>
                  </div>
                </figure>
              </li>
            </li>
            <li class="col-sm-4 col-xs-6 xs-padding single_item print">
              <figure class="portfolio_item">
                <img
                  src="img/readyforhire.jpg"
                  width="405px"
                  height="285px"
                  alt="Portfolio Item"
                />
                <div class="hover_effect">
                  <a href="contact.html">
                    <span class="comment">
                      Need help with the project? Contact me
                    </span>
                  </a>
                </div>
              </figure>
            </li>
            <li class="col-sm-4 col-xs-6 xs-padding single_item branding">
              <figure class="portfolio_item">
                <img
                  src="img/crystals.jpg"
                  width="405px"
                  height="285px"
                  alt="Portfolio Item"
                />
                <div class="hover_effect">
                  <a href="https://lidiawebdev.github.io/unit-4-game/">
                    <span class="comment">Crystal Collector</span>
                  </a>
                </div>
              </figure>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Portfolio;
