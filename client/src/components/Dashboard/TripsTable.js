import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

function GetTripsData() {
  const [tripState, setTripState] = useState([]);

  useEffect(() => {
    fetch('/api/trips')
      .then(trips => trips.json())
      .then(objectData => objectData.data)
      .then(tripsData => {
        setTripState(tripsData);
      });
  }, []);

  const rows = tripState.map(trip => {
    return (
      <tr
        key={trip.tripID}
        style={{
          cursor: 'pointer',
        }}
      >
        <td>
          <Link to={`/TripsPage/${trip.tripID}`}>
            <DriverCell driverId={trip.driverID} />
          </Link>
        </td>
        <td>{trip.user.name}</td>
        <td>{trip.billedAmount}</td>
        <td>{trip.isCash ? 'Cash' : 'None Cash'}</td>
      </tr>
    );
  });

  return (
    <div className="table-wrapper-scroll-y my-custom-scrollbar">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Driver Name</th>
            <th>Customer Name</th>
            <th>Trip Amount</th>
            <th>Payment Mode</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
}

function DriverCell(props) {
  const [driverName, setDriverName] = useState('No Name');
  // const controller = new AbortController();

  useEffect(() => {
    fetch(`/api/driver/${props.driverId}`)
      .then(rawDriver => rawDriver.json())
      .then(driverObject => driverObject.data)
      .then(driver => {
        setDriverName(driver.name);
      })
      .catch(error => {
        console.log(error);

        // controller.abort();
      });

    // return () => {
    //   controller.abort();
    // };
  });

  return driverName;
}

export default GetTripsData;
