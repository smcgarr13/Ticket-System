const mongoose = require('mongoose');

// Set up Question schema
const QuestionSchema = new mongoose.Schema({
  // Question author field
  questionAuthor: {
    type: String,
    required: true,
  },
  // Question text field
  questionText: {
    type: String,
    required: true,
  },
  // CreatedAt timestamp field
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Bounty for the question, 0 if no compensation is chosen
  bounty: {
    type: Number,
    default: 0,
  },
  // Solution field
  solution: [
    {
      type: String,
    },
  ],
  // Comments field
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  // Boolean field to determine if the question is solved
  solved: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Question', QuestionSchema);
