import { gql } from "apollo-server-express";

const Schema = gql`
  type Plan {
    id: ID!
    details: String!
    user: String!
  }

  type Interest {
    id: ID!
    planId: ID!
    user: String!
  }

  type Query {
    getAllPlans: [Plan]
    getPlan(id: Int): Plan
    getInterests(planId: Int): [Interest]
  }

  type Mutation {
    addPlan(details: String!, user: String!): Plan
    addInterest(planId: ID!, user: String!): Interest
  }
`;

export default Schema;
