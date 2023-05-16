const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schemas/index');
const port = process.env.PORT || 3000;

const app = express();

app.use('/graphqL', graphqlHTTP({
   schema,
   graphiql: process.env.NODE_ENV === 'development' 
}))

app.listen(port, console.log(`Server running on port $(PORT)`));