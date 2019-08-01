const env = require('dotenv');
const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const router = require('./routes');

if (process.env.NODE_ENV === 'development') {
  env.config();
}

const app = express();

// the use of this router must come from routes
app.use('/api', router);

app.use(express.static(path.join(__dirname, './public')));

app.use(express.json());
app.use(cookieParser());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.use((err, req, res) => {
  res.status(500).send({ error: err });
});

module.exports = app;
