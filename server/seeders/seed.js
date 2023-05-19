// Requiring the necessary seed files
const seedUsers = require('./userSeeds');
const seedQuestions = require('./questionSeeds');
const seedComments = require('./commentsSeeds');

// Creating a seeding function
const seedAll = async () => {
  // Ensure you handle errors accordingly in production
  // For simplicity, I'm just logging them here
  try {
    await seedUsers();
    console.log('Users seeded successfully.');

    await seedQuestions();
    console.log('Questions seeded successfully.');

    await seedComments();
    console.log('Comments seeded successfully.');

    // If all seeds were successful, we exit the process
    process.exit(0);
  } catch (error) {
    // If there was any error, log it and exit with failure
    console.error(error);
    process.exit(1);
  }
};

// Calling the seeding function
seedAll();