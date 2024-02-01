const { User } = require("../models");
const { signToken, AuthenticationError } = require('../utils/auth')


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {

                return User.findOne({ _id: context.user._id })
            }
            return AuthenticationError
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args)
            const token = signToken(user)
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = User.findOne({ email })

            if (!user) {
                return AuthenticationError
            }

            const correctPw = User.isCorrectPassword(password)

            if (!correctPw) {
                return AuthenticationError
            }

            const token = signToken(user)

            return { token, user };
        },
        saveBook: async (parents, { bookInput }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedBooks:  bookInput  } },
                    { new: true, runValidators: true }
                );
            }
        },
        removeBook: async (parent, { bookId }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId: bookId } } },
                    { new: true }
                )
            }
        }
    }
}

module.exports = resolvers