import { GraphQLObjectType, GraphQLString } from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: 'Information about a user',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'The name of the user',
    },
    gender: {
      type: GraphQLString,
      description: 'The gender of the user',
    },
    company: {
      type: GraphQLString,
      description: 'The company of the user',
    },
    email: {
      type: GraphQLString,
      description: 'The email of the user',
    },
    phone: {
      type: GraphQLString,
      description: 'The phone of the user',
    },
  }),
});

export default UserType;
