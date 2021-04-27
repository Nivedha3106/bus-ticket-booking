/* eslint-disable no-unused-expressions */
const Booking = require('../models/Booking');
// Show the seat avaliable
const index = (req, res) => {
  Booking.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch(() => {
      res.join({
        message: 'An error occured',
      });
    });
};
// Show single item
const show = (req, res) => {
  const { bookingID } = req.params;
  Booking.findById(bookingID)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch(() => {
      res.json({
        message: 'An error occured',
      });
    });
};

const store = (req, res) => {
  const booking = new Booking({
    name: req.body.name,
    source: req.body.source,
    dest: req.body.dest,
    fare: req.body.fare,
    time: req.body.time,

  });
  booking.save()

    .then(() => {
      res.json({
        message: 'Ticket added successfully',
      });
    })
    .catch(() => {
      res.json({
        message: 'An error occured',
      });
    });
};

// update the seats

const update = (req, res) => {
  const { bookingID } = req.body;

  const updatedData = {
    name: req.body.name,
    source: req.body.source,
    dest: req.body.dest,
    fare: req.body.fare,
    time: req.body.time,

  };
  // Booking.findByIdAndUpdate(bookingID, {$set: updatedData})
  Booking.findByIdAndUpdate(bookingID, { $set: updatedData }, { new: true })
    .then(() => {
      res.json({
        message: 'Booking updated Successfully',
      });
    })
    .catch(() => {
      'An error occured';
    });
};

// delete the seat
const destroy = (req, res) => {
  const { bookingID } = req;
  Booking.findByIdAndRemove(bookingID)
    .then(() => {
      res.json({
        message: 'Booking deleted successfully',
      });
    })
    .catch(() => {
      res.json({
        message: 'An error occured',
      });
    });
};

// To view closed tickets
module.exports = {

  index, show, store, update, destroy,
};
