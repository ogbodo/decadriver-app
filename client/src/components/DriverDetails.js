import React, { useEffect, useState } from 'react';
import { ListGroup, ListGroupItem, Card, Badge } from 'reactstrap';
import DateFormatter from './DateFormatter';

function DriverDetails({ driver }) {
  console.log('THTHTHTH', driver);
  const status = driver || false;
  const vehicleComponent = (
    <Card className="sub-title" style={{ marginTop: '5px' }}>
      <h4 style={{ textAlign: 'center' }}>
        VEHICLES
        <Badge
          style={{
            marginLeft: '5px',
            backgroundColor: '#2efd5c',
          }}
        >
          {driver.vehicleID ? driver.vehicleID.length : 0}
        </Badge>
      </h4>
    </Card>
  );
  return (
    <div className="col" id="headline-details">
      <Card
        style={{
          marginTop: '10px',
          marginBottom: '10px',
          boxShadow: '1px 3px 1px rgb(207, 51, 207)',
        }}
      >
        <Card className="title">
          <h3>DRIVER DETAILS</h3>
        </Card>
        <Card>
          <Card
            style={{
              boxShadow: '1px 3px 3px rgb(207, 51, 207)',
              padding: '10px ',
            }}
          >
            {driver ? (
              <>
                <ListGroupItem>NAME: {driver.name}</ListGroupItem>
                <ListGroupItem>EMAIL: {driver.email}</ListGroupItem>
                <ListGroupItem>PHONE: {driver.phone}</ListGroupItem>
                <ListGroupItem>GENDER: {driver.gender}</ListGroupItem>
                <ListGroupItem>AGENT: {driver.agent}</ListGroupItem>
                <ListGroupItem>DOB: {DateFormatter(driver.DOB)}</ListGroupItem>
                <ListGroupItem>ADDRESS: {driver.address}</ListGroupItem>
              </>
            ) : (
              `No Driver`
            )}
          </Card>
          {status ? vehicleComponent : `No Vehicle`}

          {/* {driver.vehicleID ? (
            <VehicleCell vehicleIDs={driver.vehicleID} />
          ) : (
            `No Vehicle`
          )} */}
          {driver.vehicleID && <VehicleCell vehicleIDs={driver.vehicleID} />}
        </Card>
      </Card>
    </div>
  );
}
function VehicleCell({ vehicleIDs }) {
  const [driverVehicle, setDriverVehicle] = useState([]);

  useEffect(() => {
    const vehicleIdsPromise = vehicleIDs.map(vehicleID => {
      return fetch(`/api/vehicle/${vehicleID}`)
        .then(response => response.json())
        .then(data => data.data);
    });

    Promise.all(vehicleIdsPromise).then(data => {
      setDriverVehicle(data);
    });
    /**TODO FOR BOND */
  }, []);

  const vehicles = driverVehicle.map((vehicle, index) => (
    <React.Fragment key={vehicle.vehicleID}>
      <ListGroupItem>Manufacturer: {vehicle.manufacturer}</ListGroupItem>
      <ListGroupItem>Plate No: {vehicle.plate}</ListGroupItem>
      <ListGroupItem>
        Acquired on: {DateFormatter(vehicle.acquired)}
      </ListGroupItem>
      <ListGroupItem>
        Acquired New: {vehicle.acquiredNew ? 'Yes' : 'No'}
      </ListGroupItem>
      <ListGroupItem>Vehicle ID: {vehicle.vehicleID}</ListGroupItem>
      {index !== driverVehicle.length - 1 ? <br /> : <></>}
    </React.Fragment>
  ));

  return <ListGroup style={{ padding: '10px ' }}>{vehicles}</ListGroup>;
}
export default DriverDetails;
