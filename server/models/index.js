// Importing all model files
const User = require('./User');
const Comments = require('./Comments');
const Question = require('./Question');
const QuestionList = require('./QuestionList');

// Exporting an object containing all of our models
module.exports = { User, Comments, Question, QuestionList };