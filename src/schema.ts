import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} from 'graphql';

import { TripType, DriverType, VehicleType } from './types';
import {
  getTrips,
  getDrivers,
  getTrip,
  getDriver,
  getVehicle,
} from './controllers';

const query = new GraphQLObjectType({
  name: 'Query',
  description: 'The query root of Deca Rides.',
  fields: () => ({
    trips: {
      type: new GraphQLList(TripType),
      description: 'All the trips',
      resolve: () => getTrips(),
    },
    drivers: {
      type: new GraphQLList(DriverType),
      description: 'All the drivers',
      resolve: () => getDrivers(),
    },
    trip: {
      type: TripType,
      description: 'Info about a single trip',
      args: {
        tripID: {
          type: GraphQLString,
          description: 'The ID of the trip to fetch',
        },
      },
      resolve: (_, { tripID }) => {
        return getTrip(tripID);
      },
    },
    driver: {
      type: DriverType,
      description: 'Info about a single driver',
      args: {
        driverID: {
          type: GraphQLString,
          description: 'The ID of the driver to fetch',
        },
      },
      resolve: (_, { driverID }) => {
        return getDriver(driverID);
      },
    },
    vehicle: {
      type: VehicleType,
      description: 'Info about a single vehicle',
      args: {
        vehicleID: {
          type: GraphQLString,
          description: 'The ID of the vehicle to fetch',
        },
      },
      resolve: (_, { vehicleID }) => {
        return getVehicle(vehicleID);
      },
    },
  }),
});

const schema = new GraphQLSchema({
  query,
});

export default schema;
