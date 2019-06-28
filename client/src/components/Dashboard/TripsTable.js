import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
    <div>
      {/* <Table striped bordered hover className="table-wrapper-scroll-y"> */}
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
        {/* <TripDetailModal /> */}
      </Table>
    </div>
  );
}

function DriverCell(props) {
  const [driverName, setDriverName] = useState('No Name');

  useEffect(() => {
    fetch(`/api/driver/${props.driverId}`)
      .then(rawDriver => rawDriver.json())
      .then(driverObject => driverObject.data)
      .then(driver => {
        setDriverName(driver.name);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return driverName;
}

function TripDetailModal() {
  const [modalStatus, setModalStatus] = useState(false);

  function toggle() {
    setModalStatus(!modalStatus);
  }

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {this.props.buttonLabel}
      </Button>
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
        className={this.props.className}
      >
        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={this.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default GetTripsData;
