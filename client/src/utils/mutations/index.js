// Importing all mutation files
const userMutations = require('./userMutations');
const commentsMutations = require('./commentsMutations');
const questionMutations = require('./questionMutations');
const questionListMutations = require('./questionListMutations');

// Merging all mutation objects
const mutations = {
  ...userMutations,
  ...commentsMutations,
  ...questionMutations,
  ...questionListMutations,
};

// Exporting the merged mutations
module.exports = mutations;