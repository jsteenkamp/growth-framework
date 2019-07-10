"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _default = _apolloServerExpress.gql`

    type Value {
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
        values(id: String): [Value]
        value(id: String, valueId: String): Value
    }
`;

exports.default = _default;