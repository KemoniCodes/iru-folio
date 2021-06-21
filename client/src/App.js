import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Works from "./components/pages/Works";
import Project from "./components/pages/Project";
import Footer from "./components/layout/Footer";
import "./scss/App.scss";
import Services from "./components/pages/Services";

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/works' component={Works} />
      <Route exact path='/project' component={Project} />
      <Route exact path='/services' component={Services} />
      <Footer />
    </Fragment>
  </Router>
);

export default App;
