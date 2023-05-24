// Importing Dependencies
const { mergeResolvers } = require('@graphql-tools/merge');
// Importing all resolver files

const questionResolver = require('./questionResolver');
const userResolver = require('./userResolver');
const commentsResolver = require('./commentsResolver');
const questionListResolver = require('./questionListResolver');
const stripeResolver = require('./stripeResolver');

// Merging all resolver objects
const resolvers = mergeResolvers([userResolver, questionResolver,questionListResolver,stripeResolver,commentsResolver]);
// const resolvers = {
//   ...questionResolver,
//   // ...userResolver,
// };

module.exports = resolvers;

// // Exporting the merged resolvers
// module.exports = resolvers;
// // Importing all resolver files
// const userResolver = require('./userResolver');
// const commentsResolver = require('./commentsResolver');
// const questionResolver = require('./questionResolver');
// const questionListResolver = require('./questionListResolver');
// const stripeResolver = require('./stripeResolver');

// // Merging all resolver objects
// const resolvers = {
//   ...userResolver,
//   ...commentsResolver,
//   ...questionResolver,
//   ...questionListResolver,
//   ...stripeResolver,
// };

// // Exporting the merged resolvers
