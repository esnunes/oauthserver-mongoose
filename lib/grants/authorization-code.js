
var grant = module.exports = {};


grant.getAuthCode = function (AuthorizationCodeModel, authCode, cb) {
  AuthorizationCodeModel.findOne({ authCode: authCode })
    .select('clientId expires userId')
    .exec(cb);
};


grant.saveAuthCode = function (AuthorizationCodeModel, authCode, clientId, expires, user, cb) {
  var doc = {
    clientId: clientId,
    userId: user.id,
    authCode: authCode,
    expires: expires
  };

  AuthorizationCodeModel.create(doc, cb);
};
