const env = require('dotenv');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const express = require('express');
const path = require('path');
const router = require('./routes');
const sessionMiddleware = require('./middleware');

if (process.env.NODE_ENV === 'development') {
  env.config();
}

const app = express();
app.use(express.static(path.join(__dirname, './public')));

app.use(express.json());
app.use(morgan('combined'));
app.use(cookieParser());
app.use(sessionMiddleware);
app.use('/api', router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.use((err, req, res) => {
  res.status(500).send(err);
});

module.exports = app;
