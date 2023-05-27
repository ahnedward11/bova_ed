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


