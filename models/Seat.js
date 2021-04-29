const mongoose = require('mongoose');

const seatSchema = mongoose.Schema({
  seatNo: {
    type: Number,
    required: true,
    min: 1,
    max: 40,
  },
  seatStatus: {
    type: String,
    default: 'open',
  },
});
const Seat = mongoose.model('Seat', seatSchema);
module.exports = Seat;
