import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from 'graphql';
import { format } from 'date-fns';

const VehicleType = new GraphQLObjectType({
  name: 'VehicleType',
  description: 'The vehicle of the driver',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'The ID of the vehicle',
      resolve: data => data.vehicleID,
    },
    manufacturer: {
      type: GraphQLString,
      description: 'The manufacturer of the vehicle',
    },
    plate: {
      type: GraphQLString,
      description: 'The manufacturer of the vehicle',
    },
    acquired: {
      type: GraphQLString,
      description: 'The date the vehicle was purchased',
      resolve: data => format(data.acquired),
    },
    acquiredNew: {
      type: GraphQLBoolean,
      description: 'Whether or not the vehicle is a new one',
    },
  }),
});

export default VehicleType;
