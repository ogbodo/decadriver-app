import React from 'react';
import { Link } from 'react-router-dom';

const Navs = () => {
  return (
    <nav className="main-nav">
      <ul className="main-nav__items">
        <li className="main-nav__item">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="main-nav__item">
          <Link to="/DriverPage">Drivers Page</Link>
        </li>
        <li className="main-nav__item main-nav__item-cta">
          <Link to="/TripsPage">Trips Page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navs;
