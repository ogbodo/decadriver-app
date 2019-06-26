import { GraphQLObjectType, GraphQLString, GraphQLFloat } from 'graphql';

const LocationType = new GraphQLObjectType({
  name: 'LocationType',
  description: 'Describes the location of an event',
  fields: () => ({
    address: {
      type: GraphQLString,
      description: 'The address of the event',
    },
    latitude: {
      type: GraphQLFloat,
      description: 'The latitude of the coordinate',
    },
    longitude: {
      type: GraphQLFloat,
      description: 'The longitude of the coordinate',
    },
  }),
});

export default LocationType;
