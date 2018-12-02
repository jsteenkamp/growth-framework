import { gql } from 'apollo-server-express';
import discipline from './discipline';

const link = gql`
    type Query {
        _: Boolean
    }
    type Mutation {
        _: Boolean
    }
    # used for method and scan until we decompose file objects
    scalar JSON
`;

export default [link, discipline];