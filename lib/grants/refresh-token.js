
module.exports = function (RefreshToken) {

  var grant = module.exports = {};


  grant.saveRefreshToken = function (refreshToken, clientId, expires, user, cb) {
    var doc = {
      clientId: clientId,
      userId: user.id,
      refreshToken: refreshToken,
      expires: expires
    };

    RefreshToken.create(doc, cb);
  };


  grant.getRefreshToken = function (refreshToken, cb) {
    RefreshToken.findOne({ refreshToken: refreshToken }, cb);
  };


  return grant;

};
