import React, { useState, useEffect } from 'react';

function Hoc({ Component, driverId }) {
  let [state, setState] = useState({});

  useEffect(() => {
    fetch(`/api/driver/${driverId}`)
      .then(response => response.json())
      .then(data => data.data)
      .then(driverObj => {
        setState(driverObj);
      })
      .catch(error => {
        setState('');
      });
  }, [driverId]);

  return <Component driver={state} />;
}

export default Hoc;
