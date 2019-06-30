import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import DriverDetails from '../DriverDetails';

function DriverPage() {
  const [drivers, setDrivers] = useState([]);
  const [driver, setDriver] = useState({});

  function DriverSelected(driverId) {
    const driverFound = drivers.find(driver => driver.driverID === driverId);
    setDriver(driverFound);
    console.log(driverFound);
  }

  useEffect(() => {
    fetch('/api/drivers')
      .then(Response => Response.json())
      .then(data => data.data)
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
              <DriverDetails driver={driver} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function Master({ driverData, onClick }) {
  const titles = driverData.map(driver => (
    <ListGroupItem
      style={{ marginTop: '20px', boxShadow: '1px 3px 1px rgb(207, 51, 207)' }}
      className="headline-text"
      key={driver.driverID}
      onClick={onClick.bind(this, driver.driverID)}
    >
      {driver.name}
    </ListGroupItem>
  ));

  return (
    <div className="col-4">
      <ListGroup id="headlines">{titles}</ListGroup>
    </div>
  );
}

export default DriverPage;
