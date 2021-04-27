const express = require('express');

const router = express.Router();

const TicketController = require('../controllers/TicketController');
// const Tickets = require('../models/Ticket')

router.get('/', TicketController.index);
router.post('/show', TicketController.show);
router.post('/store', TicketController.store);
router.put('/update/:ticketID', TicketController.update);
router.post('/destroy/:ticketID', TicketController.destroy);

module.exports = router;
