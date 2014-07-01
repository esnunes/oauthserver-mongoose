
module.exports = function (AuthorizationCode) {

  var grant = {};


  grant.getAuthCode = function (authCode, cb) {
    AuthorizationCode.findOne({ authCode: authCode }, cb);
  };


  grant.saveAuthCode = function (authCode, clientId, expires, user, cb) {
    var doc = {
      clientId: clientId,
      userId: user.id,
      authCode: authCode,
      expires: expires
    };

    AuthorizationCode.create(doc, cb);
  };


  return grant;

};
