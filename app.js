const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const ejsMate = require('ejs-mate');
// var path = require('path');
mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.render('home')
});

app.get('/bova/menu', (req, res) => {
    res.render('bova/menu');
})

app.get('/bova/cart', (req, res) => {
    res.render('bova/cart');
})

app.get('/bova/reserve', (req, res) => {
    res.render('bova/reserve');
})


app.listen(3000, () => {
    console.log('Serving on port 3000')
})