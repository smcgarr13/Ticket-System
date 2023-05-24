// Importing required packages
const { gql } = require('apollo-server-express');
const {  mergeTypeDefs } = require('@graphql-tools/merge');
// Importing all typeDef files
const userTypeDefs = require('./userTypeDefs');
const commentsTypeDefs = require('./commentsTypeDefs');
const questionTypeDefs = require('./questionTypeDefs');
const questionListTypeDefs = require('./questionListTypeDefs');
const bountyTypeDefs = require('./bountyTypeDefs');
const stripeTypeDefs = require('./stripeTypeDefs');

// Merging all typeDefs into one array
const typeDefs = mergeTypeDefs([userTypeDefs,questionTypeDefs,commentsTypeDefs,questionListTypeDefs,bountyTypeDefs,stripeTypeDefs]);
// const typeDefs = gql`
//   ${questionTypeDefs},
//   ${userTypeDefs}
// `;
// const typeDefs = gql`
//   ${userTypeDefs}
//   ${commentsTypeDefs}
//   ${questionTypeDefs}
//   ${questionListTypeDefs}
//   ${bountyTypeDefs}
//   ${stripeTypeDefs}

// `;

// Exporting the merged typeDefs
module.exports = typeDefs;