const typeDefs = `

type User {
    _id: ID
    username: STRING
    email: STRING
    bookCount: STRING
    savedBooks: [Book]
};

type Book {
    bookId: ID
    authors: [STRING]
    description: STRING
    title: STRING
    image: STRING
    link: STRING
}

type Auth {
    token: ID
    user: [User]!
}

type Query {
    me: [User]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(Book: [authors], description: String, title: String, bookId: String, image: String, link: String): User
    removeBook(bookId: String!): User
}
`

module.exports = typeDefs;