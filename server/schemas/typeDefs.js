// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

type Book {
    _id: ID!
    bookId: String  
    author: [String]
    description: String
    title: String
    image: String
    link: String
}

type User{
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}


type Query{
    me: User
    
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: savedBook!): User
    removeBook(bookId: ID!): User
}
`;

// export the typeDefs
module.exports = typeDefs;