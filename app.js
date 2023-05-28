const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Reservation = require('./models/reservation')
const Item = require('./models/items')
if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
const session = require('express-session');
const flash = require('connect-flash');

const passport = require('passport');
const LocalStrategy = require('passport-local');



const ejsMate = require('ejs-mate');
const { captureRejectionSymbol } = require('events');
const dbUrl = process.env.DB_URL;

mongoose.connect('mongodb://localhost:27017/edproject', {
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
// app.use(express.bodyParser());

app.use(express.static(path.join(__dirname, 'public')))


const sessionConfig = {
    secret: 'thisshouldbeabettersecret!',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig))
app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
// passport.use(new LocalStrategy(User.createStrategy()));
// passport.use(new LocalStrategy(User.authenticate()));

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use((req, res, next) => {
//     console.log(req.session)
//     res.locals.currentUser = req.user;
//     res.locals.success = req.flash('success');
//     res.locals.error = req.flash('error');
//     next();
// })


app.get('/', (req, res) => {
    res.render('home')
});



app.get('/bova/menu', (req, res) => {
    res.render('bova/menu');
})

app.get('/bova/onlineorder', (req, res) => {
    res.render('bova/onlineorder');
})

app.get('/bova/cart', (req, res) => {
    res.render('bova/cart');
})

app.get('/bova/reserve', (req, res) => {
    res.render('bova/reserve');
})


app.get('/allreservations', async (req, res) => {
    const reservations = await Reservation.find({});
    res.render('bova/index', { reservations })
});
app.get('/reservations/:id', async (req, res,) => {
    const reservation = await Reservation.findById(req.params.id)
    res.render('bova/show', { reservation });
});

app.get('/reservations/:id/edit', async (req, res) => {
    const reservation = await Reservation.findById(req.params.id)
    res.render('bova/reservationedit', { reservation });
})

app.put('/reservations/:id', async (req, res) => {
    const { id } = req.params;
    const reservation = await Reservation.findByIdAndUpdate(id, { ...req.body.reservation });
    res.redirect(`/reservations/${reservation._id}`)
});
app.post('/reservations', async(req, res) =>{
    const reservation = new Reservation(req.body.reservation);
    await reservation.save();
    res.redirect('bova/reserve')
})
app.delete('/reservations/:id', async (req, res) => {
    const { id } = req.params;
    await Reservation.findByIdAndDelete(id);
    res.redirect('/allreservations');
})







app.get('/allitems', async (req, res) => {
    const items = await Item.find({});
    res.render('bova/cart', { items })
});
app.get('/items/:id', async (req, res,) => {
    const item = await Item.findById(req.params.id)
    res.render('bova/showitem', { item });
});

// app.get('/items/:id/edit', async (req, res) => {
//     const item = await Item.findById(req.params.id)
//     res.render('bova/itemedit', { item });
// })

app.post('/items', async(req, res) =>{
    const item = new Item(req.body.item);
    await item.save();
    res.redirect('bova/onlineorder')
})

app.delete('/items/:id', async (req, res) => {
    const { id } = req.params;
    await Item.findByIdAndDelete(id);
    res.redirect('/allitems');
})




app.listen(3000, () => {
    console.log('Serving on port 3000')
})