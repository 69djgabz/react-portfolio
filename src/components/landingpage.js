import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              className="avatar-image"
              src="images/gabib.jpeg"
              alt="avatar"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | Javascript | React | Nodejs | Express |
                MongoDB
              </p>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/gabi9tornado"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square" />
                </a>

                <a
                  href="https://github.com/69djgabz"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github" aria-hidden="true" />
                </a>
                <a
                  href="https://youtu.be/Zm1CRaQHnQE"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Landing;
