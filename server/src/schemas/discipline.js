import { gql } from 'apollo-server-express';

export default gql`  
    type Discipline {
        id: ID!
        title: String
        roles: JSON
    }
    
    extend type Query {
        disciplines: [Discipline]
        discipline(id: String): Discipline
    }
`;
