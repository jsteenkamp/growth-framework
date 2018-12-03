import { gql } from 'apollo-server-express';

export default gql`  
  
    type Skill {
        id: ID!
        title: String
        details: String
    }
  
    type Role {
        id: ID!
        order: Int
        title: String
        description: String
        skills: JSON
    }
  
    type Discipline {
        id: ID!
        title: String
        roles: JSON
    }
    
    extend type Query {
        disciplines: [Discipline]
        discipline(id: String): Discipline
        roles(id: String): [Role]
        skills(id: String): [Skill]
    }
`;
