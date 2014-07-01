var utils = require('../utils');


module.exports = function (User) {

  var grant = module.exports = {};


  grant.getUser = function (username, password, cb) {
    password = utils.passwordEncoder(password);

    var result = function (err, user) {
      if (err) return cb(err);
      if (!user) return cb(null, false);

      cb(null, { id: user._id });
    };

    User.findOne({ username: username, password: password }, result);
  };


  return grant;

};
