// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

type Book {
    _id: ID
    bookId: String  
    author: [String]
    description: String
    title: String
    image: String
    link: String
}

type User{
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}


type Query{
    books: [Book]
    
}
type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;