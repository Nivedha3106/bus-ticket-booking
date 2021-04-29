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
  Seat.find({ seatStatus: 'open' })
    .then((response) => {
      if (response < 1) res.json('No open tickets');
      else res.json(response);
    })

    .catch(() => {
      res.json({
        message: 'An error occured',
      });
    });
};

// to view close tickets
const close = (req, res) => {
  Seat.find({ seatStatus: 'close' })
    .then((response) => {
      if (response < 1) res.json('Bus full');
      else res.json(response);
    })
    .catch(() => {
      res.json({
        message: 'An error occures',
      });
    });
};

module.exports = {

  index, store, open, close,
};
