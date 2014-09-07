var utils = require('../utils');


var grant = module.exports = {};


grant.getUser = function (UserModel, username, password, cb) {
  password = utils.passwordEncoder(password);

  var result = function (err, user) {
    if (err) return cb(err);
    if (!user) return cb(null, false);

    cb(null, { id: user._id });
  };

  UserModel.findOne({ username: username, password: password })
    .select('_id')
    .exec(result);
};
