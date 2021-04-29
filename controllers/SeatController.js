const Seat = require('../models/Seat');

require('dotenv/config');
// Show the ticket
const index = (req, res) => {
  Seat.find()
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
  const seat = new Seat({
    seatNo: req.body.seatNo,
    seatStatus: req.body.seatStatus,
  });
  seat.save()

    .then(() => {
      res.json({
        message: 'Seat added successfully',
      });
    })
    .catch(() => {
      res.json({
        message: 'An error occured',
      });
    });
};

// to view open tickets
const open = (req, res) => {
  const isOpen = Seat.find({ seatStatus: 'open' });
  if (isOpen < 1) res.send('No open tickets');
  else res.send(isOpen);
};

// to view close tickets
const close = (req, res) => {
  const isClose = Seat.find({ seatStatus: 'close' });
  if (isClose < 1) res.send('Bus full');
  else res.send(isClose);
};

module.exports = {

  index, store, open, close,
};
