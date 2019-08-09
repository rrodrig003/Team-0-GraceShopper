const sessionMw = (req, res, next) => {
  const { SID, loggedIn } = req.cookies;
  if (loggedIn) req.loggedIn = true;
  req.SID = SID;
  console.log('req sid', req.SID);
  next();
};

module.exports = sessionMw;
