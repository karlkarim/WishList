const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wishlistDB', { useNewUrlParser: true, useUnifiedTopology: true });
require('./item');
let db = mongoose.connection;

db.on('connected', console.error.bind(console, 'MongoDB connection Successful'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));