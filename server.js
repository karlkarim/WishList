const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./models/db');

const path = require('path');
const userRoute = require('./routes/wishList');
const adminRoute = require('./routes/admin');
const errorPage = require('./controllers/404');
const app = express();



app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(userRoute);
app.use('/admin', adminRoute);

app.use(errorPage.getErrorPage);

app.listen(process.env.PORT || 3000, function(){
    console.log("Server has started.");
});
