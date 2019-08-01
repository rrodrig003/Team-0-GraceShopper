const { exec } = require('child_process');
const app = require('./main');
const { connection } = require('../server/database/models');

const PORT = process.env.PORT || 3000;
const SEED_DB = process.env.SEED === 'true';
const PATH = process.env.SEED_PATH || null;
const REFRESH_DB = process.env.FORCE_REFRESH === 'true' || false;

const startServer = () => connection
  .sync({ force: REFRESH_DB })
  .then(() => {
    if (SEED_DB && PATH) {
      exec(PATH, (err, stdout) => {
        if (err) console.error(`${err}`);
        console.log(`${stdout}`);
      });
    }
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log('App listening on PORT', PORT);
    });
  })
  .catch(e => console.error('Error connecting to DB', e));

startServer(app, connection);
