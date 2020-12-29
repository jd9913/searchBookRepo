const { Book, Author } = require('../models');



const resolvers = {
  Query: {
    books: async () => {
      return Book.find();
    },
  },
};

module.exports = resolvers;
