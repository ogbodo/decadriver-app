import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

function GetTripsData() {
  const [tripState, setTripState] = useState([]);

  useEffect(() => {
    fetch('/api/trips')
      .then(response => response.json())
      .then(data => data.data)
      .then(trips => {
        setTripState(trips);
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
          <Link to={`/TripsPage/${[trip.tripID, trip.driverID]}`}>
            <td
              style={{
                color: 'rgb(207, 51, 207)',
                borderRadius: '10px',
              }}
            >
              Info
            </td>
          </Link>
        </td>
        <td>
          <DriverCell driverId={trip.driverID} />
        </td>
        <td>{trip.user.name}</td>
        <td>{`$${trip.billedAmount}`}</td>
        <td>{trip.isCash ? 'Cash' : 'None Cash'}</td>
      </tr>
    );
  });

  return (
    <div style={{ overflowY: 'scroll', height: '45rem' }}>
      <Table striped bordered hover style={{ marginTop: '10px' }}>
        <thead style={{ backgroundColor: 'rgb(207, 51, 207)' }}>
          <tr>
            <th>Info</th>
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

function DriverCell({ driverId }) {
  const [driverName, setDriverName] = useState('No Name');

  useEffect(() => {
    fetch(`/api/driver/${driverId}`)
      .then(response => response.json())
      .then(data => data.data)
      .then(driver => {
        setDriverName(driver.name);
      })
      .catch(error => {
        console.log(error);
      });
  }, [driverId]);

  return driverName;
}

export default GetTripsData;
