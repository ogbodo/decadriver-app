import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DriverDetails from '../DriverDetails';
import Hoc from '../Hoc';
import { ListGroupItem, Card } from 'reactstrap';

function getId(type) {
  const idPattern = /^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$/;
  const fullPath = window.location.pathname;
  const tripDriverIds = fullPath.split('/');

  for (const pathSegment of tripDriverIds) {
    const payload = pathSegment.split(',');
    if (payload.length > 1) {
      if (type === 'trip' && idPattern.test(payload[0])) return payload[0];
      if (type === 'driver' && idPattern.test(payload[1])) return payload[1];
      break;
    }
  }
}

function TripDetails({ tripID }) {
  const [tripDetails, setTripDetails] = useState({});

  useEffect(() => {
    fetch(`/api/trip/${tripID}`)
      .then(response => response.json())
      .then(data => data.data)
      .then(trip => {
        setTripDetails(trip[0]);
      });
  }, []);

  return (
    <Card
      style={{
        marginTop: '10px',
        marginBottom: '10px',
        boxShadow: '1px 3px 1px rgb(207, 51, 207)',
      }}
    >
      <Card className="title">
        <h3>TRIP DETAILS</h3>
      </Card>
      <Card>
        <Card
          style={{
            boxShadow: '1px 3px 3px rgb(207, 51, 207)',
            padding: '5px 0px 5px 5px ',
          }}
        >
          <div className="col">
            <ListGroupItem>Driver Id: {tripDetails.driverID}</ListGroupItem>
            <ListGroupItem>Trip Id: {tripDetails.tripID}</ListGroupItem>
            <ListGroupItem>
              Mode of Payment: {tripDetails.isCash ? 'Cash' : 'None Cash'}
            </ListGroupItem>
            <ListGroupItem>
              Billed Amount: {tripDetails.billedAmount}
            </ListGroupItem>
            <ListGroupItem>
              Customer Name: {tripDetails.user ? tripDetails.user.name : ''}
            </ListGroupItem>
            <ListGroupItem>
              Customer Gender: {tripDetails.user ? tripDetails.user.gender : ''}
            </ListGroupItem>
            <ListGroupItem>
              Customer Company:
              {tripDetails.user ? tripDetails.user.company : ''}
            </ListGroupItem>
            <ListGroupItem>
              Customer Email: {tripDetails.user ? tripDetails.user.email : ''}
            </ListGroupItem>
            <ListGroupItem>
              Customer phone: {tripDetails.user ? tripDetails.user.phone : ''}
            </ListGroupItem>
            <ListGroupItem>Trip Date: {tripDetails.created}</ListGroupItem>
            <ListGroupItem>
              Pickup Address:
              {tripDetails.pickup ? tripDetails.pickup.address : ''}
            </ListGroupItem>
            <ListGroupItem>
              Destination Address:
              {tripDetails.destination ? tripDetails.destination.address : ''}
            </ListGroupItem>
          </div>
        </Card>
      </Card>
    </Card>
  );
}

function TripsPage() {
  const tripId = getId('trip');
  const driverId = getId('driver');

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <TripDetails tripID={tripId} />
        </Col>
        <Col sm={6}>
          <Hoc Component={DriverDetails} driverId={driverId} />
        </Col>
      </Row>
    </Container>
  );
}

export default TripsPage;
