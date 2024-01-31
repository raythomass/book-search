const { User } = require("../models");
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        singleUser: async (parent, {userId}) => {
            return User.findOne({ _id: userId })
        }
    },

    Mutation: {
        createUser: async (parent, { username, email, password }) => {
            const newUser = User.create({ username, email, password})
            const token = signToken(newUser)

            return {token, newUser};
        },
        login: async (parent, { username, email, password }) => {
            const user = User.findOne({email})

            if(!user) {

            }

            const correctPw = User.isCorrectPassword(password)

            if(!correctPw) {
                
            }

            const token = signToken(user)

            return { token, user };
        },
        saveBook: async (parents, { newBook }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                  { _id: userId },
                  { $addToSet: { savedBooks: newBook } },
                  { new: true, runValidators: true }
                );
              }
        },
        deleteBook: async (parent, { bookId }, context) => {
            if(context.user) {
                return User.findOneAndUpdate(
                    { _id: userId },
                    { $pull: { savedBooks: { bookId: bookId } } },
                    { new: true}
                )
            }
        }
    }
}