import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Works from "./components/pages/Works";
import Menu from "./components/sections/Menu";
import Services from "./components/pages/Services";
import ServicesInfo from "./components/sections/Services/ServicesInfo";
import service from "./components/pages/Services";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

import "./scss/App.scss";
//Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Switch>
          <Route exact path='/menu' component={Menu} />
          <Route path='/works' component={Works} />
          <Route exact path='/about-us' component={About} />
          <Route exact path='/contact' component={Contact} />

          <Route path='/services'>
            <Services />
          </Route>
          <Route
            exact
            path='/:id'
            render={(props) => (
              <ServicesInfo
                {...props}
                key={props.match.params.id}
                service={service}
              />
            )}
          />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
