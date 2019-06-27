import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Charts from '../Chart';
import GetTripsData from '../Dashboard/TripsTable';

function Layout() {
  return (
    <Container>
      <Row>
        <Col sm={5}>
          <Charts />
        </Col>
        <Col sm={7}>
          <GetTripsData />
        </Col>
      </Row>
    </Container>
  );
}

function Dashboard() {
  return (
    <div>
      <Layout />
    </div>
  );
}

// data: {
//   male: 30,
//   female: 20,
//   noOfCashTrips: 26,
//   noOfNonCashTrips: 24,
//   billedTotal: 128224.69,
//   cashBilledTotal: 69043.8,
//   nonCashBilledTotal: 59180.89,
// }
// }

export default Dashboard;
