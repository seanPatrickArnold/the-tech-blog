function withAuth(req, res, next) {
  console.log(req.session);
  if (!req.session.user_id) {
    res.redirect('/login');
  }
  else {
    const currentTime = Date.now();
    const timeLogged = currentTime - req.session.lastActive;
    console.log(currentTime)
    console.log(timeLogged);
    if (timeLogged > 60000) {
      if (req.session.loggedIn) {
        req.session.destroy(() => {
          res.redirect('/login');
        });
      }
    }
    else {
      req.session.lastActive = Date.now();
    }
    next();
  }
};
  
module.exports = withAuth;