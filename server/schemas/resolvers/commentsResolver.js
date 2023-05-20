// Import the AuthenticationError class from Apollo Server Express library
const { AuthenticationError } = require('apollo-server-express');
// Import the Comment model from the models directory
const { Comment } = require('../../models');

// Define the resolvers
const resolvers = {
  // Query resolvers
  Query: {
    // Resolver for a single comment. It receives the comment's ID as an argument and fetches it from the database.
    comment: async (parent, { id }, context) => {
      // Use the findById method from Mongoose to find a single comment by its ID
      return await Comment.findById(id);
    },
    // Resolver for multiple comments. It doesn't receive any arguments and fetches all comments from the database.
    comments: async (parent, args, context) => {
      // Use the find method from Mongoose to find all comments
    //   return await Comment.find({});
    return await Comment.findById(questionId);
    },
  },
  // Mutation resolvers
  Mutation: {
    // Resolver to add a new comment. It receives the questionId, commentAuthor, and commentText as arguments
    addComment: async (parent, { questionId, commentAuthor, commentText }, context) => {
      // Create a new Comment instance with the provided data and current timestamp
      let newComment = new Comment({
        questionId,
        commentAuthor,
        commentText,
        createdAt: new Date().toISOString(),
        isSolution: false,
      });

      // Save the new comment to the database and return it
      return await newComment.save();
    },
    // Resolver to update an existing comment. It receives the comment's ID and the fields to update as arguments.
    updateComment: async (parent, { id, commentAuthor, commentText, isSolution }, context) => {
      // Prepare the update object with the fields that are not undefined
      let update = {};
      if (commentAuthor !== undefined) {
        update.commentAuthor = commentAuthor;
      }
      if (commentText !== undefined) {
        update.commentText = commentText;
      }
      if (isSolution !== undefined) {
        update.isSolution = isSolution;
      }

      // Use the findByIdAndUpdate method from Mongoose to update the comment in the database and return the updated comment
      return await Comment.findByIdAndUpdate(id, update, { new: true });
    },
    // Resolver to delete a comment. It receives the comment's ID as an argument.
    deleteComment: async (parent, { id }, context) => {
      // Use the findByIdAndDelete method from Mongoose to delete the comment from the database and return it
      return await Comment.findByIdAndDelete(id);
    },
  },
};

// Export the resolvers to be used in the Apollo server setup
module.exports = resolvers;
