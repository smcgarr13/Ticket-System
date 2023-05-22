// Importing required packages
const { gql } = require('apollo-server-express');

// Importing all typeDef files
const userTypeDefs = require('./userTypeDefs');
const commentsTypeDefs = require('./commentsTypeDefs');
const questionTypeDefs = require('./questionTypeDefs');
const questionListTypeDefs = require('./questionListTypeDefs');
const stripeTypeDefs = require('./stripeTypeDefs');

// Merging all typeDefs into one array
const typeDefs = gql`
  ${userTypeDefs}
  ${commentsTypeDefs}
  ${questionTypeDefs}
  ${questionListTypeDefs}
  ${stripeTypeDefs}
`;

// Exporting the merged typeDefs
module.exports = typeDefs;