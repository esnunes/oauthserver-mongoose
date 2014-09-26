
module.exports = function () {

  var grant = {};

  /**
   * Since an anonymous user could use a client's token to access a general service.
   * Should not populate user's information by the client id in the access token.
   */

  grant.getUserFromClient = function (clientId, clientSecret, cb) {
    return cb(null, {});
  };


  return grant;

};

