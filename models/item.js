
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wishSchema = new Schema({
    name: {
        type: String
    }
});

let Item = mongoose.model('Item', wishSchema, 'items');
let rndItem = new Item({ name: 'Introduction to Mongoose'});
 
// rndItem.save(function (err, item) {
//     if(err) return console.error(err);
//     console.log(item.name + 'saved to items collection')
// })
