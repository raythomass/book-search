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

 expo