
module.exports = function (Client) {

  var grant = {};


  grant.getUserFromClient = function (clientId, clientSecret, cb) {
    var result = function (client) {
      cb(null, { id: client.userId });
    };

    Client.findOne({ _id: clientId, secret: clientSecret }).exec()
      .then(result, cb);
  };


  return grant;

};

