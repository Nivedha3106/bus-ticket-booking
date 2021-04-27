const Ticket = require('../models/Ticket');

require('dotenv/config');
// Show the ticket
const index = (req, res) => {
  Ticket.find()
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
// Show single ticket
const show = (req, res) => {
  const { ticketID } = req.params;
  Ticket.findById(ticketID)
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
// add new ticket
const store = (req, res) => {
  const ticket = new Ticket({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    phone: req.body.phone,
    source: req.body.source,
    dest: req.body.dest,

  });
  ticket.save()

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

// update the ticket

const update = (req, res) => {
  const { ticketID } = req.params;

  const updatedData = {
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    phone: req.body.phone,
    source: req.body.source,
    dest: req.body.dest,

  };
  Ticket.findByIdAndUpdate(ticketID, { $set: updatedData })
    .then(() => {
      res.json({
        message: 'Ticket updated Successfully',
      });
    })
    .catch(() => {
      'An error occured';
    });
};

// delete the ticket
const destroy = (req, res) => {
  const { ticketID } = req.body;
  Ticket.findByIdAndRemove(ticketID)
    .then(() => {
      res.json({
        message: 'Ticket deleted successfully',
      });
    })
    .catch(() => {
      res.json({
        message: 'An error occured',
      });
    });
};

module.exports = {

  index, show, store, update, destroy,
};
