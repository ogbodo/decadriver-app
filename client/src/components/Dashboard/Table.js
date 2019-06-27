import React, { useState, useEffect } from 'react';
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

  function onTripClicked(tripId) {
    alert(tripId);
  }

  const rows = tripState.map((trip, index) => {
    return (
      <tr
        key={trip.tripID}
        style={{
          cursor: 'pointer',
        }}
        onClick={onTripClicked.bind(this, trip.tripID)}
      >
        <td>{trip.driverID}</td>
        <td>{trip.user.name}</td>
        <td>{trip.billedAmount}</td>
        <td>{trip.isCash ? 'Cash' : 'None Cash'}</td>
      </tr>
    );
  });

  return (
    <div class="table-wrapper-scroll-y my-custom-scrollbar">
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

export default GetTripsData;
