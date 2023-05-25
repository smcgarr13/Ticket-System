// Importing required modules
const express = require('express');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

// Importing GraphQL type definitions and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
// Setting up port

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
   console.log(`API server running on port ${PORT}`);
 });
 
const app = express();
const server = new ApolloServer({
   typeDefs,
   resolvers,
   context: authMiddleware,
   persistedQueries: {
      cache: "bounded"
    },
});


// Middleware for parsing HTTP request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




// Serving static files in production
if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, '../client/build')));
}
// Route for serving the front-end application
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../client/build/index.html'))
});


 
// Function to start Apollo server
const startApolloServer = async () => {
   await server.start();
   server.applyMiddleware({ app });

   // Connecting to the database and starting the server
   db.once('open', () => {
      console.log(`Database Running`);
      app.listen(PORT, () => {
         console.log(`API server running on port ${PORT}`);
         console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      })
   })
   
};

// Start Server through Async function call. 
startApolloServer();