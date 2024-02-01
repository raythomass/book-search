import { gql } from '@apollo/client'

export const GET_ME = gql `
    query me {
        User {
            username
            email
            bookCount
            savedBooks
        }
    }
`