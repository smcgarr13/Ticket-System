// Importing all resolver files
const userResolver = require('./userResolver');
const commentsResolver = require('./commentsResolver');
const questionResolver = require('./questionResolver');
const questionListResolver = require('./questionListResolver');
const stripeResolver = require('./stripeResolver');

// Merging all resolver objects
const resolvers = {
  ...userResolver,
  ...commentsResolver,
  ...questionResolver,
  ...questionListResolver,
  ...stripeResolver,
};

// Exporting the merged resolvers
module.exports = resolvers;