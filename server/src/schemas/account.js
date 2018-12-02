import { gql } from 'apollo-server-express';

export default gql`
  type Account {
    id: ID!
    username: String
    password: String
    email: String
    roles: [String]
    update_ts: String
    create_ts: String
  }

  type Token {
    token: String!
  }

  extend type Query {
    allAccounts: [Account]
    signInAccount(username: String, password: String): Token!
    signOutAccount: Boolean!
  }


  input AccountInput {
      username: String
      password: String
      email: String
      roles: String
  }
  
  extend type Mutation {
    addAccount(account: AccountInput!): Boolean!
  }
`;
