const appErr = require("../utils/appErr");

const protected = (req, res, next) => {
  //check if user is login
  if (req.session.userAuth) {
    next();
  } else {
    next(appErr("Not authorized, login again"));
  }
};
module.exports = protected;
