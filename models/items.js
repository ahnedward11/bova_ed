const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new mongoose.Schema({
    dish: String,
    price: Number,
    description: String,
    img: String,
});

module.exports = mongoose.model('Item', ItemSchema);

// const Item = mongoose.model('Item', productSchema);

// module.exports = Item;


