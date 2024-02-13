const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://rthomas5678:1LJQFer0MxF8u10q@bookcluster.mugxoaz.mongodb.net/?retryWrites=true&w=majority');

module.exports = mongoose.connection;
