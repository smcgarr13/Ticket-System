// Importing required modules
const mongoose = require('mongoose');
const Comment = require('../models/Comment');

// Connecting to MongoDB instance
mongoose.connect('mongodb://localhost/yourDB', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Seeds data
const commentSeeds = [
  {
    commentAuthor: 'hulk',
    commentText: 'I SMASH!',
    isSolution: false,
    questionId: '5f9ee8d8a487f5562804b48d'
  },
  {
    commentAuthor: 'thor',
    commentText: 'Have at thee!',
    isSolution: false,
    questionId: '5f9ee8d8a487f5562804b48e'
  },
  {
    commentAuthor: 'spiderman',
    commentText: 'With great power comes great responsibility.',
    isSolution: false,
    questionId: '5f9ee8d8a487f5562804b48f'
  },
];

// Deleting existing comments
Comment.deleteMany({})
  .then(() => {
    return Comment.collection.insertMany(commentSeeds);
  })
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });