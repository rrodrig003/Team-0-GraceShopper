const router = require('express').Router();
const crypto = require('crypto');
const Session = require('../database/models/session');
const User = require('../database/models/user');

module.exports = router;

router.post('/login', (req, res, next) => {
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
      if (!user) throw new Error('User not found.');
      else return user;
    })
    .then(async (user) => {
      const match = await User.validatePassword(password, user);
      if (match === true) res.json(user);
      else {
        throw new Error('Invalid Password.');
      }
    })
    .catch((e) => {
      console.error(e);
      next(e);
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
  res.sendStatus(200);
});

router.get('/user/:id', (req, res, next) => {
  User.findByPk(req.params.id)
    .then(user => res.json(user))
    .catch(next);
});

router.get('/session', (req, res, next) => {
  if (!req.headers.cookie) {
    const session = crypto.randomBytes(16).toString('hex');
    Session.create({
      SID: session,
    })
      .then((result) => {
        res.cookie('SID', session, { maxAge: 2629800000 });
        res.json(result);
      })
      .catch(next);
  } else {
    const SID = req.headers.cookie.split('=')[1];
    Session.findOne({
      where: {
        SID,
      },
    })
      .then(session => res.json(session))
      .catch(next);
  }
});
