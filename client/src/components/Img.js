import React from 'react';
const Img = props => {
  return <img src={require('./profile-pic.jpg')} alt="Izuking" {...props} />;
};
export default Img;
