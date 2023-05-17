const mongoose = require('mongoose');

// Set up Comment schema
const CommentSchema = new mongoose.Schema({
  // Comment author field
  commentAuthor: {
    type: String,
    required: true,
  },
  // Comment text field
  commentText: {
    type: String,
    required: true,
  },
  // Comment creation date field
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Boolean field to determine if the comment is a solution
  isSolution: {
    type: Boolean,
    default: false,
  },
  // Reference to the Question this Comment belongs to
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true,
  },
});

module.exports = mongoose.model('Comment', CommentSchema);
