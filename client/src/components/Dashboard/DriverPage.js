import React, { useState, useEffect } from 'react';

function DriverPage() {
  const [drivers, setDrivers] = useState([]);
  const [driver, setDriver] = useState({});

  function DriverSelected(driverId) {
    drivers.forEach(driver => {
      if (driver.driverID === driverId) {
        setDriver(driver);
      }
    });
  }

  useEffect(() => {
    fetch('/api/drivers')
      .then(rawDrivers => rawDrivers.json())
      .then(driversObject => driversObject.data)
      .then(drivers => {
        setDrivers(drivers);
        setDriver(drivers[0]);
      });
  }, []);

  return (
    <>
      <main>
        <section>
          <div className="container-fluid">
            <div className="row">
              <Master driverData={drivers} onClick={DriverSelected} />
              <Detail driver={driver} />
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
      <h4>
        VEHICLES:
        {driver.vehicleID && <VehicleCell vehicleIDs={driver.vehicleID} />}
      </h4>
    </div>
  );
}

function VehicleCell({ vehicleIDs }) {
  const [driverVehicle, setDriverVehicle] = useState([]);

  useEffect(() => {
    const vehicleIdsPromise = vehicleIDs.map(vehicleID => {
      return fetch(`/api/vehicle/${vehicleID}`)
        .then(data => data.json())
        .then(data => data.data);
    });

    Promise.all(vehicleIdsPromise).then(data => {
      setDriverVehicle(data);
    });
  });

  const vehicles = driverVehicle.map(vehicle => (
    <React.Fragment key={vehicle.vehicleID}>
      <li>Manufacturer: {vehicle.manufacturer}</li>
      <li>Plate No: {vehicle.plate}</li>
      <li>Acquired on: {vehicle.acquired}</li>
      <li>Acquired New: {vehicle.acquiredNew ? 'Yes' : 'No'}</li>
      <li>Vehicle ID: {vehicle.vehicleID}</li>
      <br />
    </React.Fragment>
  ));

  return <ul>{vehicles}</ul>;
}
export default DriverPage;
