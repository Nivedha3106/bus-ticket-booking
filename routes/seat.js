const express = require('express');

const router = express.Router();

const Seat = require('../controllers/SeatController');

router.post('/open', Seat.open);
router.post('/close', Seat.close);
router.get('/', Seat.index);
router.get('/store', Seat.store);

module.exports = router;
