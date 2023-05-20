// Import the ApolloServer from apollo-server
const { ApolloServer } = require("apollo-server-express");

// Import the type definitions and resolvers
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

// Create the Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Export the server
module.exports = server;