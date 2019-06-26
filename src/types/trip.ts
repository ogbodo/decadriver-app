import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLFloat,
} from 'graphql';
import { format } from 'date-fns';

import { getDriver } from '../controllers';
import UserType from './user';
import DriverType from './driver';
import LocationType from './location';

const TripType = new GraphQLObjectType({
  name: 'Trip',
  description: 'Information about a single trip',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'The ID of the trip',
      resolve: data => data.tripID,
    },
    driver: {
      type: DriverType,
      description: 'Info about the driver that took this trip',
      resolve: data => getDriver(data.driverID),
    },
    user: {
      type: UserType,
      description: 'Info about the user that took this trip',
    },
    isCash: {
      type: GraphQLBoolean,
      description: 'Whether or not the trip was paid for in cash',
    },
    billedAmount: {
      type: GraphQLFloat,
      description: 'The amount that was paid for this trip',
      resolve: data => normalizeAmount(data.billedAmount),
    },
    created: {
      type: GraphQLString,
      description: 'The date the trip was created',
      resolve: data => format(data.created),
    },
    pickup: {
      type: LocationType,
      description: 'Info about where this trip started',
    },
    destination: {
      type: LocationType,
      description: 'Info about where this trip ended',
    },
  }),
});

function normalizeAmount(amount: string | number) {
  if (typeof amount === 'string') {
    return Number(amount.replace(',', ''));
  }

  return Number(amount);
}

export default TripType;
