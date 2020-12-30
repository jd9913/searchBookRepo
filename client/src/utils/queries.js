import gql from 'graphql-tag';

export const GET_BOOK=gql`
{
    me{
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