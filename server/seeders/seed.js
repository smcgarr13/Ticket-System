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
console.log(seededQuestions); // Verify the seeded questions with question IDs


connectDB.once('open',async()=>{

  try{
  await User.deleteMany({});
  await User.create(userSeeds);
  await Question.deleteMany({});
  await Question.create(questionSeeds);
  await Comments.deleteMany({});
  console.log('QArray:',Question);
  const commentData = JSON.parse(fs.readFileSync(path.join(__dirname, 'commentsSeeds.json'), 'utf8'));

  const questions = await Question.find({}); // Fetch all questions from the database
  for (let i = 0; i < questions.length; i++) {
          const question = questions[i];
          const comments = commentData.filter((comment) => comment.questionId === question._id);
          
          await Comments.create(comments);
          
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


// connectDB.once('open', async () => {
//   try {
//     await User.deleteMany({});
//     await User.create(userSeeds);
//     await Question.deleteMany({});
//     await Question.create(questionSeeds);
    
//     const commentData = JSON.parse(fs.readFileSync(path.join(__dirname, 'commentSeeds.json'), 'utf8'));
    
//     const questions = await Question.find({}); // Fetch all questions from the database
    
//     for (let i = 0; i < questions.length; i++) {
//       const question = questions[i];
//       const comments = commentData.filter((comment) => comment.questionId === question._id);
      
//       await Comment.create(comments);
      
//       question.comments = comments.map((comment) => comment._id); // Assign comment IDs to question.comments
      
//       await question.save();
//     }
    
//     process.exit();
//   } catch (err) {
//     throw err;
//   }
// });

// async function seedDatabase() {
//   try {
//     // Delete existing data
//     await Promise.all([
//       User.deleteMany({}),
//       Question.deleteMany({}),
//       Comment.deleteMany({}),
//     ]);

//     // Seed questions first
//     const questionData = JSON.parse(fs.readFileSync(path.join(__dirname, 'questionSeeds.json'), 'utf8'));
//     const questionDocs = await Question.insertMany(questionData);

//     // Seed comments with each comment assigned a questionId from the list of inserted questions
//     const commentData = JSON.parse(fs.readFileSync(path.join(__dirname, 'commentSeeds.json'), 'utf8'));
//     for(let i = 0; i < commentData.length; i++) {
//       commentData[i].questionId = questionDocs[i % questionDocs.length]._id;
//     }
//     const commentDocs = await Comment.insertMany(commentData);

//     // Update the questions with the ids of the inserted comments
//     for(let i = 0; i < questionDocs.length; i++) {
//       questionDocs[i].comments = commentDocs.filter(comment => comment.questionId.equals(questionDocs[i]._id)).map(comment => comment._id);
//       await questionDocs[i].save();
//     }

//     // Seed users
//     const userData = JSON.parse(fs.readFileSync(path.join(__dirname, 'userSeeds.json'), 'utf8'));
//     await User.insertMany(userData);

//     console.log('Database seeding completed!');
//     process.exit(0);
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// }

// db.once('open',seedDatabase());







// // Requiring the necessary seed files
// const seedUsers = require('./userSeeds');
// const seedQuestions = require('./questionSeeds');
// const seedComments = require('./commentsSeeds');

// // Creating a seeding function
// const seedAll = async () => {
//   // Ensure you handle errors accordingly in production
//   // For simplicity, I'm just logging them here
//   try {
//     await seedUsers();
//     console.log('Users seeded successfully.');

//     await seedQuestions();
//     console.log('Questions seeded successfully.');

//     await seedComments();
//     console.log('Comments seeded successfully.');

//     // If all seeds were successful, we exit the process
//     process.exit(0);
//   } catch (error) {
//     // If there was any error, log it and exit with failure
//     console.error(error);
//     process.exit(1);
//   }
// };

// // Calling the seeding function
// seedAll();