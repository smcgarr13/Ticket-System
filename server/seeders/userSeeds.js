const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect('mongodb://localhost/yourDB', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const userSeeds = [
  {
    username: 'ironman',
    email: 'tony@starkindustries.com',
    password: 'pepperpotts',
    questions: ['How to upgrade my suit?', 'How to manage Stark Industries?'],
    comments: ['Nice idea!', 'I should try this.']
  },
  {
    username: 'captainamerica',
    email: 'steve@avengers.com',
    password: 'buckybarnes',
    questions: ['How to adjust to modern times?', 'Good places to visit in the 21st century?'],
    comments: ['Good thought.', 'This worked for me.']
  },
  {
    username: 'blackwidow',
    email: 'natasha@avengers.com',
    password: 'redledger',
    questions: ['Best combat techniques?', 'How to be a better spy?'],
    comments: ['I agree.', 'Interesting perspective.']
  },
];

User.deleteMany({})
  .then(() => User.collection.insertMany(userSeeds))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });