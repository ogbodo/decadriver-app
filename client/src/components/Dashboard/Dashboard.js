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

export default Dashboard;
