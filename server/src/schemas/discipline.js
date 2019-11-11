import { gql } from 'apollo-server-express';

export default gql`

    type Principle {
        id: ID!
        title: String
        details: String
    }
    
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
        level: JSON
    }
  
    type Discipline {
        id: ID!
        title: String
        skills: JSON
        roles: JSON
    }
    
    extend type Query {
        disciplines: [Discipline]
        discipline(id: String): Discipline
        roles(id: String): [Role]
        role(id: String, roleId: String): Role
        skills(id: String): [Skill]
        skill(id: String, skillId: String): Skill
        principles(id: String): [Principle]
        principle(id: String, principleId: String): Principle
    }
`;
