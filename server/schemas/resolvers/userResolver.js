// Importing necessary modules
const { User } = require("../../models/User");

// Resolver for handling user related queries and mutations
const userResolvers = {
  Query: {
    // Resolver for finding a user by ID
    user: async (parent, { id }, context) => {
      return await User.findById(id);
    },
    // Resolver for finding all users
    users: async () => {
      return await User.find({});
    },
  },
  Mutation: {
    // Resolver for creating a user
    createUser: async (parent, { username, email, password }, context) => {
      const newUser = await User.create({
        username,
        email,
        password,
      });
      return newUser;   
    },
    // Login User
    login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No profile with this email found!');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
        }
  
        // const token = signToken(user);
        return user;
      },
    // Resolver for deleting a user
    removeUser: async (parent, args, context) => {
          if (context.user) {
            return User.findOneAndDelete({ _id: context.user._id });
          }
          throw new AuthenticationError('You need to be logged in!');
        },
  },
};

module.exports = userResolvers;