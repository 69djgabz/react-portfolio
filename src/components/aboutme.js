import React, { Component } from "react";

class About extends Component {
  componentDidMount() {
    document.querySelector(".mdl-layout__content").style.backgroundImage =
      'url("https://i.ytimg.com/vi/tYB0ATsj55o/maxresdefault.jpg")';
  }
  render() {
    return (
      <div className="about-me">
        <h1>About Me</h1>
        <h4>
          Hello, I'm Gabi and im a full stack developer , HTML/CSS, Bootstarp,
          JavaScript, React, Nodejs, MongoDB .I'm a Dj also since 1999 ,i play
          free style and produced some tracks and did a lot of gigs and Music
          sets ,nowadays i live in Germany and looking forward ... So i will be
          glad to know you or to work and learn from you when its possible .
        </h4>
      </div>
    );
  }
}
export default About;