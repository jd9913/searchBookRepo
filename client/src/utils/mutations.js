import gql from 'graphql-tag';


export const LOGIN_USER = gql`

mutation loginUser($email: String!, $password: String!){
    login(email: $email, password: $password){
        token
        user{
            _id
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!){
    addUser(username: $usernam, password: $password, email: $email){
        user{
            _id
            username
            email
            bookCount
            savedBooks{
                authors
                bookId
                image
                link
                title
                description
            }
        }
        token
    }

}
`;

export const SAVE_BOOK = gql`
mutation saveBook($input: savedBook!){
    saveBook(input: $input)
    {
        _id
        username
        email
        bookCount
        savedBooks{
            # _id
            bookId
            authors
            image
            link
            title
            description
        }
    }
}
`;

export const REMOVE_BOOK = gql`
mutatio removeBook($bookId: ID!){
    removeBook(bookId: $bookId){
        _id
        username
        email
        bookCount
        savedBooks{
            # _id
            bookId
            authors
            image
            link
            title
            description
        }
    }
}
`;