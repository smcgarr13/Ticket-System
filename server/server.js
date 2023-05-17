// 
const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const db = require('./config/connection');
const path = require('path');

const {typeDefs, resolvers} = require('./schemas');
const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
   typeDefs,
   resolvers
});

// 
app.use(express.urlencoded({extended:false}));
app.use(express.json());

if(process.env.NODE_ENV ==='production'){
   app.use(express.static(path.join(__dirname,'../client/build')));
}
app.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname,'../client/build/index.html'))
});

const startApolloServer = async()=>{
   await server.start();
   server.applyMiddleware({app});
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