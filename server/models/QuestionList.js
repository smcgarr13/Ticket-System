const mongoose = require('mongoose');

// Set up Question schema
const QuestionListSchema = new mongoose.Schema({
  // Question author field
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
    },
  ],
  filter: {
    type: String,
    default: ''
  }

});

module.exports = mongoose.model('QuestionList', QuestionListSchema);

