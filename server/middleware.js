const sessionMw = (req, res, next) => {
  const { SID, loggedIn } = req.cookies;
  if (loggedIn) req.loggedIn = true;
  req.SID = SID;
  next();
};

module.exports = sessionMw;
