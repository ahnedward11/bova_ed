const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new mongoose.Schema({
    dish: String,
    price: Number,
    description: String,
    img: String,
    qty: Number,
});

module.exports = mongoose.model('Item', ItemSchema);



