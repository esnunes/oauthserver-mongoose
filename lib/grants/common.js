
var objectIdRegExp = new RegExp('^[0-9a-fA-F]{24}$');


module.exports = function (AccessToken, Client) {

  var grant = {};


  grant.getAccessToken = function (bearerToken, cb) {
    AccessToken.findOne({ accessToken: bearerToken }, cb);
  };


  grant.getClient = function (clientId, clientSecret, cb) {
    if (!objectIdRegExp.test(clientId)) return cb(null, false);

    var result = function (err, client) {
      if (err) return cb(err);
      if (!client) return cb(null, false);

      var obj = {
        clientId: client._id.toString()
      };

      cb(null, obj);
    };

    Client.findOne({ _id: clientId, secret: clientSecret }, result);
  };


  grant.grantTypeAllowed = function (clientId, grantType, cb) {
    var result = function (err, client) {
      if (err) return cb(err);
      cb(null, client && client.grantTypes.indexOf(grantType) !== -1);
    };

    Client.findById(clientId, result);
  };


  grant.saveAccessToken = function (accessToken, clientId, expires, user, cb) {
    var doc = {
      clientId: clientId,
      userId: user.id,
      accessToken: accessToken,
      expires: expires
    };

    AccessToken.create(doc, cb);
  };


  return grant;

};
