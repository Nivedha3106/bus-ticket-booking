const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  /* seatID: {
        type: Number,
        min: 1,
        max: 40,
        required: true
    }, */
  source: {
    type: String,

  },
  dest: {
    type: String,

  },
  fare: {
    type: String,

  },
  time: {
    type: String,

  },

});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
