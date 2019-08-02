const Session = require('./database/models/session');

const sessionMw = async (req, res, next) => {
  if (req.headers.cookie) {
    const SID = req.headers.cookie.split('=')[1];
    const session = await Session.findOne({
      where: {
        SID,
      },
    });
    if (session) {
      if (session.userId !== null) req.loggedIn = true;
      next();
    }
  }
};

module.exports = sessionMw;
