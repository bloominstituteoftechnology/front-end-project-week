function sendToken(req, res, next) {
  let token = localStorage.getItem("notesAuthToken");
  let config = {};
  if (token) {
    config = { headers: { Authorization: token } };
    req = { ...req, config };
    next();
  }
  next();
}

module.exports = sendToken;
