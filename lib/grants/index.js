
module.exports = function (models) {

  var authorizationCode = require('./authorization-code');
  var clientCredentials = require('./client-credentials');
  var common = require('./common');
  var password = require('./password');
  var refreshToken = require('./refresh-token');


  var handler = {};


  // authorization_code
  handler.getAuthCode = authorizationCode.getAuthCode.bind(null, models.AuthorizationCode);
  handler.saveAuthCode = authorizationCode.saveAuthCode.bind(null, models.AuthorizationCode);

  // client_credentials
  handler.getUserFromClient = clientCredentials.getUserFromClient;

  // common
  handler.getAccessToken = common.getAccessToken.bind(null, models.AccessToken);
  handler.getClient = common.getClient.bind(null, models.Client);
  handler.grantTypeAllowed = common.grantTypeAllowed.bind(null, models.Client);
  handler.saveAccessToken = common.saveAccessToken.bind(null, models.AccessToken);

  // password
  handler.getUser = password.getUser.bind(null, models.User);

  // refresh_token
  handler.saveRefreshToken = refreshToken.saveRefreshToken.bind(null, models.RefreshToken);
  handler.getRefreshToken = refreshToken.getRefreshToken.bind(null, models.RefreshToken);
  handler.revokeRefreshToken = refreshToken.revokeRefreshToken(null, models.RefreshToken);

  return handler;

};
