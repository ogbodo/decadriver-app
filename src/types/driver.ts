import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import { format } from 'date-fns';

import { getVehiclesByIDs } from '../controllers';
import VehicleType from './vehicle';

const DriverType = new GraphQLObjectType({
  name: 'DriverType',
  description: 'Describes a driver',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'The ID of the driver',
      resolve: data => data.driverID,
    },
    name: {
      type: GraphQLString,
      description: 'The name of the driver',
    },
    gender: {
      type: GraphQLString,
      description: 'The gender of the driver',
    },
    agent: {
      type: GraphQLString,
      description: 'The agent of the driver',
    },
    email: {
      type: GraphQLString,
      description: 'The email of the driver',
    },
    phone: {
      type: GraphQLString,
      description: 'The phone number of the driver',
    },
    dob: {
      type: GraphQLString,
      description: 'The date of birth of the driver',
      resolve: data => format(data.DOB),
    },
    address: {
      type: GraphQLString,
      description: 'The address of the driver',
    },
    vehicles: {
      type: new GraphQLList(VehicleType),
      description: 'The vehicles of the driver',
      resolve: data => getVehiclesByIDs(data.vehicleID),
    },
  }),
});

export default DriverType;
