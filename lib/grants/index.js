
module.exports = function (models) {

  var authorizationCode = require('./authorization-code')(models.AuthorizationCode);
  var clientCredentials = require('./client-credentials')();
  var common = require('./common')(models.AccessToken, models.Client);
  var password = require('./password')(models.User);
  var refreshToken = require('./refresh-token')(models.RefreshToken);


  var handler = {};


  // authorization_code

  handler.getAuthCode = authorizationCode.getAuthCode;
  handler.saveAuthCode = authorizationCode.saveAuthCode;

  // client_credentials

  handler.getUserFromClient = clientCredentials.getUserFromClient;

  // common

  handler.getAccessToken = common.getAccessToken;
  handler.getClient = common.getClient;
  handler.grantTypeAllowed = common.grantTypeAllowed;
  handler.saveAccessToken = common.saveAccessToken;

  // password

  handler.getUser = password.getUser;

  // refresh_token

  handler.saveRefreshToken = refreshToken.saveRefreshToken;
  handler.getRefreshToken = refreshToken.getRefreshToken;


  return handler;

};
