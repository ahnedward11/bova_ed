const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new mongoose.Schema({
    dish: String,
    price: Number,
    description: String,
    type: String
});

// module.exports = mongoose.model('Menu', MenuSchema);

const Menu = mongoose.model('Menu', productSchema);

module.exports = Menu;


// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         required: true,
//         min: 0
//     },
//     category: {
//         type: String,
//         lowercase: true,
//         enum: ['fruit', 'vegetable', 'dairy']
//     }
// })

// const Product = mongoose.model('Product', productSchema);

// module.exports = Product;