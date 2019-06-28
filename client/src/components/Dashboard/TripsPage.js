import React, { useState, useEffect } from 'react';

function getTripId() {
  const fullPath = window.location.pathname;
  return fullPath.split('/')[2];
}

function TripsPage() {
  const tripId = getTripId();
  const [tripDetails, setTripDetails] = useState({});

  useEffect(() => {
    fetch(`/api/trip/${tripId}`)
      .then(rawTrip => rawTrip.json())
      .then(tripObject => tripObject.data)
      .then(trip => {
        console.log(trip[0]);
        setTripDetails(trip[0]);
      });
  });

  return (
    <div className="col" id="headline-details">
      <h3>TRIP DETAILS</h3>
      <h4>Driver Id: {tripDetails.driverID}</h4>
      <h4>Trip Id: {tripDetails.tripID}</h4>
      <h4>Mode of Payment: {tripDetails.isCash ? 'Cash' : 'None Cash'}</h4>
      <h4>Billed Amount: {tripDetails.billedAmount}</h4>
      <h4>Customer Name: {tripDetails.user ? tripDetails.user.name : ''}</h4>
      <h4>
        Customer Gender: {tripDetails.user ? tripDetails.user.gender : ''}
      </h4>
      <h4>
        Customer Company: {tripDetails.user ? tripDetails.user.company : ''}
      </h4>
      <h4>Customer Email: {tripDetails.user ? tripDetails.user.email : ''}</h4>
      <h4>Customer phone: {tripDetails.user ? tripDetails.user.phone : ''}</h4>
      <h4>Trip Date: {tripDetails.created}</h4>
      <h4>
        Pickup Address: {tripDetails.pickup ? tripDetails.pickup.address : ''}
      </h4>
      <h4>
        Destination Address:{' '}
        {tripDetails.destination ? tripDetails.destination.address : ''}
      </h4>
    </div>
  );
}

export default TripsPage;
