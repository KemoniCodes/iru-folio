import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import './scss/App.scss';

const App = () => (
  <Router>
   <Fragment>
     <Navbar />
     <Route exact path="/" component={Home} />
   </Fragment>
  </Router>
);

export default App;
