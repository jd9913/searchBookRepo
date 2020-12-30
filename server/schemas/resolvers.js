const { Book, Author } = require('../models');
const { AuthenticationError }= require('apollo-server-express');


const resolvers = {
  Query: {
    books: async () => {
      return Book.find();
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user=await User.create(args);

      return user;
    },
    login: async (parent, { email, password }) => {
      const user=await User.findOne({ email });

      if(!user){
        throw new AuthenticationError('Incorrect Credentials');
      }
      const correctPw=await user.isCorrectPassword(password);

      if(!correctPw){
        throw new AuthenticationError('Incorrect credentials');
      }

      return user;
    }
  }
};

module.exports = resolvers;
