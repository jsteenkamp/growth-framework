import GraphQLJSON from 'graphql-type-json';
import data from '../models/data/software-engineering.json';

export default {
  JSON: GraphQLJSON,
  Query: {
    disciplines: async (root, args, { models }) => {
      return [];
    },

    discipline: async (root, args, { models }) => {
      return data;
    },
  },
};
