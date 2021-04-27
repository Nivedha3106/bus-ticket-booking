const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const TicketRoute = require('./routes/ticket');
const BookingRoute = require('./routes/booking');
const UserRoute = require('./routes/user');

require('dotenv/config');

mongoose.Promise = global.Promise;
// eslint-disable-next-line max-len
mongoose.connect(process.env.connection, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
const db = mongoose.connection;
db.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.log(err);
});
db.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('Database connection established');
});

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/tickets', TicketRoute);
app.use('/api/bookings', BookingRoute);
app.use('/api/users', UserRoute);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 3002!!!');
});
