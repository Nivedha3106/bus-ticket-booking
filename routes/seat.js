const express = require('express');

const router = express.Router();

const Seat = require('../controllers/SeatController');

router.get('/open', Seat.open);
router.get('/close', Seat.close);
router.get('/', Seat.index);
router.post('/store', Seat.store);

module.exports = router;
