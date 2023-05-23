// Importing all query files
const userQueries = require('./userQueries');
const commentsQueries = require('./commentsQueries');
const questionQueries = require('./questionQueries');
const questionListQueries = require('./questionListQueries');
const stripeQueries = require('./stripeQueries');
// Merging all query objects
const queries = {
  ...userQueries,
  ...commentsQueries,
  ...questionQueries,
  ...questionListQueries,
  ...stripeQueries,
};

// Exporting the merged queries
module.exports = queries;