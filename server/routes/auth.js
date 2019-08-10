const router = require('express').Router();
const crypto = require('crypto');
const Session = require('../database/models/session');
const User = require('../database/models/user');

module.exports = router;

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.sendStatus(401);
    return;
  }
  User.findOne({
    where: {
      username,
    },
  })
    .then((user) => {
      if (!user) throw new Error('Invalid Username/Password');
      else return user;
    })
    .then(async (user) => {
      const match = await User.validate(password, user);

      if (match === true) res.cookie('loggedIn', 'true', { maxAge: 2629800000 }).json(user);
      else {
        throw new Error('Invalid Username/Password');
      }
    })
    .catch((e) => {
      res.status(400).send({
        error: e.message,
      });
    });
});

router.put('/session/:userId', (req, res, next) => {
  const id = req.body.sessionId;
  const userId = parseInt(req.params.userId, 10);
  Session.findByPk(id)
    .then(session => session.setUser(userId))
    .then(session => res.json(session))
    .catch(next);
});

router.post('/logout', (req, res) => {
  if (!req.loggedIn) res.sendStatus(400);
  res.clearCookie('SID');
  res.clearCookie('loggedIn');
  res.sendStatus(200);
});

router.get('/user/:id', (req, res, next) => {
  if (!parseInt(req.params.id, 10)) {
    res.status(400).json({
      error: 'Invalid Request',
    });
  } else {
    User.findByPk(req.params.id)
      .then((user) => {
        if (user !== null) res.json(user);
        else throw new Error('User not found');
      })
      .catch((e) => {
        const { message } = e;
        if (message === 'User not found') {
          res.status(404).send({
            error: message,
          });
        } else {
          next(e);
        }
      });
  }
});

router.get('/session', (req, res, next) => {
  if (!req.headers.cookie) {
    const session = crypto.randomBytes(16).toString('hex');
    Session.create({
      SID: session,
    })
      .then((result) => {
        res.cookie('SID', session, { maxAge: 2629800000 }).json(result);
      })
      .catch(next);
  } else {
    Session.findOne({
      where: {
        SID: req.SID,
      },
    })
      .then(session => res.json(session))
      .catch(next);
  }
});

router.post('/register', (req, res) => {
  const {
    username,
    password,
    firstName,
    lastName,
    email,
    country,
    state,
    city,
    postalCode,
    street,
  } = req.body;

  User.create({
    username,
    password,
    firstName,
    lastName,
    email,
    country,
    state,
    city,
    postalCode,
    street,
  })
    .then(user => res.json(user))
    .catch((e) => {
      res.status(400).send({
        error: e.errors,
      });
    });
});
