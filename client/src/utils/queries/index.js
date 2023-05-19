// Importing all query files
const userQueries = require('./userQueries');
const commentsQueries = require('./commentsQueries');
const questionQueries = require('./questionQueries');
const questionListQueries = require('./questionListQueries');

// Merging all query objects
const queries = {
  ...userQueries,
  ...commentsQueries,
  ...questionQueries,
  ...questionListQueries,
};

// Exporting the merged queries
module.exports = queries;