import React from "react";
import LandingPage from "./landingpage";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./aboutme";
import Contact from "./contact";
import Cv from "./cv";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/contact" component={Contact} />
      <Route path="/cv" component={Cv} />
    </Switch>
  );
};
export default Main;
