const express = require('express');

const router = express.Router();

const BookingController = require('../controllers/BookingController');
// const Bookings = require('../models/Booking')

router.get('/', BookingController.index);
router.get('/show/:bookingID', BookingController.show);
router.post('/store', BookingController.store);
router.put('/update', BookingController.update);
router.get('/destroy/:bookingID', BookingController.destroy);
module.exports = router;
