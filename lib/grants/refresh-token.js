
var grant = module.exports = {};


grant.saveRefreshToken = function (RefreshTokenModel, refreshToken, clientId, expires, user, cb) {
  var doc = {
    clientId: clientId,
    userId: user.id,
    refreshToken: refreshToken,
    expires: expires
  };

  RefreshTokenModel.create(doc, cb);
};


grant.getRefreshToken = function (RefreshTokenModel, refreshToken, cb) {
  RefreshTokenModel.findOne({ refreshToken: refreshToken })
    .select('clientId expires userId')
    .exec(cb);
};


grant.revokeRefreshToken = function (RefreshTokenModel, refreshToken, cb) {
  RefreshTokenModel.findOneAndRemove({ refreshToken: refreshToken }, cb);
};
