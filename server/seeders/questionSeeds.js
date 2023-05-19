// Importing required modules
const mongoose = require('mongoose');
const Question = require('../models/Question');

// Connecting to MongoDB instance
mongoose.connect('mongodb://localhost/yourDB', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Seeds data
const questionSeeds = [
  {
    questionAuthor: 'ironman',
    questionText: 'How can I improve the efficiency of my Arc Reactor?',
    bounty: 500,
    solution: [],
    comments: ['5f9ee8d8a487f5562804b48d', '5f9ee8d8a487f5562804b48e'], // Replace with actual comment ids
    solved: false
  },
  {
    questionAuthor: 'captainamerica',
    questionText: 'Any modern etiquette advice for a man out of time?',
    bounty: 100,
    solution: [],
    comments: ['5f9ee8d8a487f5562804b48f', '5f9ee8d8a487f5562804b490'], // Replace with actual comment ids
    solved: false
  },
  {
    questionAuthor: 'blackwidow',
    questionText: 'Best techniques for hand-to-hand combat?',
    bounty: 300,
    solution: [],
    comments: ['5f9ee8d8a487f5562804b491', '5f9ee8d8a487f5562804b492'], // Replace with actual comment ids
    solved: false
  },
];

// Deleting existing questions
Question.deleteMany({})
  .then(() => Question.collection.insertMany(questionSeeds))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });