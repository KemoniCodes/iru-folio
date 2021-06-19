import React, {Fragment} from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import './scss/App.scss';

const App = () => (
   <Fragment>
     <Navbar />
     <Home />
   </Fragment>
);

export default App;
