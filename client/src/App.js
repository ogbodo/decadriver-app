import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navs from './components/Dashboard/Nav';
import Img from './components/Img';

import Dashboard from './components/Dashboard/Dashboard';
import DriversPage from './components/Dashboard/DriverPage';
import TripsPage from './components/Dashboard/TripsPage';

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

function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact component={Dashboard} />
      <Route path="/DriverPage" component={DriversPage} />
      <Route path="/TripsPage/:id" component={TripsPage} />
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="main-header">
      <Navs />© 2019 Info.com - All Rights Reserved.
    </footer>
  );
}
//

export default App;
