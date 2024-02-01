import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($username: String!, $email: String!, $password: String!) {
        loginUser(username:$username, email: $email, password: $password ) {
            username
            email
            bookCount
            savedBooks
        }
    }
`;
 export const ADD_USER = gql `
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username:$username, email: $email, password: $password ) {
            username
            email
            bookCount
            savedBooks
        }
    }
 `;

export const SAVE_BOOK = gql`
    mutation saveBook($bookInput: BookData) {
        saveBook(bookInput: $bookInput) {
            bookId
            authors
            description
            title
            image
            link
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
           username 
        }
    }
`;