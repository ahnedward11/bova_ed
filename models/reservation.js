const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
    name: String,
    size: Number,
    date: String,
    time: Number,
});

module.exports = mongoose.model('Reservation', ReservationSchema);



