
var objectIdRegExp = new RegExp('^[0-9a-fA-F]{24}$');


var grant = module.exports = {};


grant.getAccessToken = function (AccessTokenModel, bearerToken, cb) {
  AccessTokenModel.findOne({ accessToken: bearerToken }).select('expires userId').exec(cb);
};


grant.getClient = function (ClientModel, clientId, clientSecret, cb) {
  if (!objectIdRegExp.test(clientId)) return cb(null, false);

  var result = function (err, client) {
    if (err) return cb(err);
    if (!client) return cb(null, false);

    var obj = {
      clientId: client._id.toString()
    };

    cb(null, obj);
  };

  ClientModel.findOne({ _id: clientId, secret: clientSecret }).select('_id').exec(result);
};


grant.grantTypeAllowed = function (ClientModel, clientId, grantType, cb) {
  var result = function (err, client) {
    if (err) return cb(err);
    cb(null, client && client.grantTypes.indexOf(grantType) !== -1);
  };

  ClientModel.findById(clientId, result);
};


grant.saveAccessToken = function (AccessTokenModel, accessToken, clientId, expires, user, cb) {
  var doc = {
    clientId: clientId,
    userId: user.id,
    accessToken: accessToken,
    expires: expires
  };

  AccessTokenModel.create(doc, cb);
};

