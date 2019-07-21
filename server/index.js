if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}
const express = require('express');
const path = require('path');
const routes = require('./routes');
const startup = require('./startup');
const { db } = require('./database/index');

const app = express();

const publicPath = path.join(__dirname, './public');

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request from ${req.path}: `, req.body);
  next();
});

app.use(express.static(publicPath));

routes.forEach(({ router, routePath }) => {
  app.use(routePath, router);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, './index.html'));
});

startup(app, db)
  .then(() => {
    console.log('Application successfully started.');
  })
  .catch(e => {
    console.error('Application failed to start.', e);
    throw e;
  });
