const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kk9980587:mongodb@cluster0-by9y6.mongodb.net/wishlistDB', { useNewUrlParser: true, useUnifiedTopology: true });
require('./item');
let db = mongoose.connection;

db.on('connected', console.error.bind(console, 'MongoDB connection Successful'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));