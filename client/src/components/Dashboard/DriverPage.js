import React, { useState, useEffect } from 'react';

function DriverPage() {
  const [driversState, setDriversState] = useState([]);
  const [driver, setDriver] = useState({});

  function DriverClicked(driverId) {
    useEffect(() => {
      fetch(`/api/driver/${driverId}`)
        .then(rawDrivers => rawDrivers.json())
        .then(driversObject => driversObject.data)
        .then(drivers => setDriver(drivers));
    });
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
              <Master driverData={driversState} DriverClicked={DriverClicked} />
              <Detail />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function Master(props) {
  console.log(props);

  const titles = props.driverData.map(driver => (
    <li
      className="headline-text"
      key={driver.driverID}
      // style={{
      //   height: '50px',
      //   borderBottom: '0.3px  ',
      //   backgroundColor: '#fff',
      //   paddingTop: '10px',
      // }}
      onClick={props.DriverClicked.bind(this, driver.driverID)}
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

function Detail(props) {
  return (
    <div className="col" id="headline-details">
      <h3>{props.details}</h3>
    </div>
  );
}
export default DriverPage;
