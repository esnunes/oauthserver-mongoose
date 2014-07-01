var crypto = require('crypto');


var util = module.exports = {};


util.secretGenerator = function () {
  var buf = crypto.randomBytes(256);

  return crypto.createHash('sha1')
    .update(buf)
    .digest('hex');
};


util.passwordEncoder = function (password) {
  return crypto.createHash('sha1')
    .update(password)
    .digest('hex');
};
