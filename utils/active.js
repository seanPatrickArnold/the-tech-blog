function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function checkIfActive(req, res, next) {
    if (req.session.loggedIn) {
        console.log(req.session);
        const currentTime = Date.now();
        const timeLogged = currentTime - req.session.lastActive;
        console.log(currentTime)
        console.log(timeLogged);
        if (timeLogged > 5000) {
            req.session.loggedIn = false;
        }
        else {
            req.session.lastActive = Date.now();
        }
    }
    next();
  };
    
  module.exports = checkIfActive;