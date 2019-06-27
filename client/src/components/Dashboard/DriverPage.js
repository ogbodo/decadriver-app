import React, { useState, useEffect } from 'react';

function DriverPage() {
  const [driversState, setDriversState] = useState([]);
  const [driver, setDriver] = useState({});
  const [driverDetails, setDriverDetails] = useState('');

  function DriverSelected(driverId) {
    useEffect(() => {
      fetch(`/api/driver/${driverId}`)
        .then(rawDriver => rawDriver.json())
        .then(driverObject => driverObject.data)
        .then(driver => {
          console.log(driver);

          setDriver(driver);
        });
    });

    return (
      <div className="col" id="headline-details">
        <h3>DRIVER DETAILS</h3>
        <h4>{driver.photo}</h4>
        <h4>NAME: {driver.name}</h4>
        <h4>EMAIL: {driver.email}</h4>
        <h4>PHONE: {driver.phone}</h4>
        <h4>GENDER: {driver.gender}</h4>
        <h4>AGENT: {driver.agent}</h4>
        <h4>DOB: {driver.DOB}</h4>
        <h4>ADDRESS: {driver.address}</h4>
      </div>
    );
  }

  useEffect(() => {
    fetch('/api/drivers')
      .then(rawDrivers => rawDrivers.json())
      .then(driversObject => driversObject.data)
      .then(drivers => setDriversState(drivers));
  }, []);

  return (
    <>
      <main>
        <section>
          <div className="container-fluid">
            <div className="row">
              <Master driverData={driversState} onClick={DriverSelected} />
              <div>{Object.entries(driver)}</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function Master(props) {
  const titles = props.driverData.map(driver => (
    <li
      className="headline-text"
      key={driver.driverID}
      onClick={props.onClick.bind(this, driver.driverID)}
    >
      {driver.name}
    </li>
  ));

  return (
    <div className="col-4">
      <ul id="headlines">{titles}</ul>
    </div>
  );
}

function Detail({ driver }) {
  return (
    <div className="col" id="headline-details">
      <h3>DRIVER DETAILS</h3>
      <h4>{driver.photo}</h4>
      <h4>NAME: {driver.name}</h4>
      <h4>EMAIL: {driver.email}</h4>
      <h4>PHONE: {driver.phone}</h4>
      <h4>GENDER: {driver.gender}</h4>
      <h4>AGENT: {driver.agent}</h4>
      <h4>DOB: {driver.DOB}</h4>
      <h4>ADDRESS: {driver.address}</h4>
    </div>
  );
}

export default DriverPage;
