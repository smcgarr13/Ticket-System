// Importing required modules
const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const db = require('./config/connection');
const path = require('path');
const {authMiddleware} = require('./utils/auth');

// Importing GraphQL type definitions and resolvers
const {typeDefs, resolvers} = require('./schemas');

// Setting up port
const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
   typeDefs,
   resolvers,
   context: authMiddleware,
});

// Middleware for parsing HTTP request bodies
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Serving static files in production
if(process.env.NODE_ENV ==='production'){
   app.use(express.static(path.join(__dirname,'../client/build')));
}
// Route for serving the front-end application
app.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname,'../client/build/index.html'))
});

// Function to start Apollo server
const startApolloServer = async()=>{
   await server.start();
   server.applyMiddleware({app});

   // Connecting to the database and starting the server
   db.once('open',()=>{
      console.log(`Databse Running`);
      app.listen(PORT,()=>{
         console.log(`API server running on port ${PORT}`);
         console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      })
   })
};

// Start Server through Async function call. 
startApolloServer();