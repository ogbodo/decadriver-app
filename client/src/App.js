import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navs from './components/Dashboard/Nav';
import Img from './components/Img';

import Dashboard from './components/Dashboard/Dashboard';
import DriversPage from './components/Dashboard/DriverPage';
import TripsPage from './components/Dashboard/TripsPage';

function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact component={Dashboard} />
      <Route path="/DriverPage" component={DriversPage} />
      <Route path="/TripsPage/:id" component={TripsPage} />
    </div>
  );
}

function Header() {
  return (
    <header className="main-header">
      <div>
        <Img id="logo" />
      </div>
      <Navs />
    </header>
  );
}

export default App;
