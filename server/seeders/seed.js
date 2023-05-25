const connectDB = require('../config/connection');
const fs =require('fs');
const path = require('path');
const {User,Question,Comments} = require('../models');
const commentSeeds = require('./commentsSeeds.json');
const userSeeds = require('./userSeeds.json');
const questionSeeds = require('./questionSeeds.json');

// Generating Question Ids
const uuid = require('uuid');
const seededQuestions = questionSeeds.map((question) => {
  const questionId = uuid.v4(); // Generate a unique ID for the question
  return { ...question, questionId };
});
// console.log(seededQuestions);
 // Verify the seeded questions with question IDs


connectDB.once('open',async()=>{

  try{
  await User.deleteMany({});
  await User.create(userSeeds);
  console.log(User);
  await Question.deleteMany({});
  await Question.create(questionSeeds);
  await Comments.deleteMany({});
  // console.log('QArray:',Question);
  const commentData = JSON.parse(fs.readFileSync(path.join(__dirname, 'commentsSeeds.json'), 'utf8'));

  const questions = await Question.find({}); // Fetch all questions from the database
  for (let i = 0; i < questions.length; i++) {
          const question = questions[i];
          const comments = commentData.filter((comment) => comment.questionId === question._id);
          
          await Comments.create(comments);
          console.log(Comments.question);
          
          question.comments = comments.map((comment) => comment._id); // Assign comment IDs to question.comments
          
          await question.save();
        }
console.log(Question);
  process.exit();
  }
  catch(err){
    throw err;
  }
})
