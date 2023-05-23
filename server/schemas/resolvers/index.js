// Importing all resolver files
const userResolver = require('./userResolver');
const commentsResolver = require('./commentsResolver');
const questionResolver = require('./questionResolver');
const questionListResolver = require('./questionListResolver');
const stripeResolver = require('./checkoutResolver');

// Merging all resolver objects
const resolvers = {
  ...userResolver,
  ...commentsResolver,
  ...questionResolver,
  ...questionListResolver,
  ...checkoutResolver,
};

// Exporting the merged resolvers
module.exports = resolvers;