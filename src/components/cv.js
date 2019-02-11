import React, { Component } from "react";

class Cv extends Component {
  componentDidMount() {
    document.querySelector(".mdl-layout__content").style.backgroundImage =
      "none";
    document.querySelector(".mdl-layout__content").style.background =
      "linear-gradient(to top, #fcb045, #fd1d1d, #833ab4)";
  }
  render() {
    return (
      <div className="Cv">
        <h1>Download My CV</h1>
      </div>
    );
  }
}
export default Cv;
