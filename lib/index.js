var utils = require('./utils');


module.exports.model = function (mongoose, opts) {
  opts = opts || {};

  var addOrUpdate = function (schema, defaultName, plugin) {
    if (!schema) {
      schema = mongoose.Schema({});
      mongoose.model(defaultName, schema);
    }

    schema.plugin(plugin);
  };

  var schemas = {};

  schemas.AccessToken = addOrUpdate(opts.accessToken, 'OAuth2AccessToken', require('./models/access-token'));
  schemas.AuthorizationCode = addOrUpdate(opts.authorizationCode, 'OAuthAuthorizationCode', require('./models/authorization-code'));
  schemas.Client = addOrUpdate(opts.client, 'OAuth2Client', require('./models/client'));
  schemas.RefreshToken = addOrUpdate(opts.refreshToken, 'OAuth2RefreshToken', require('./models/refresh-token'));
  schemas.User = addOrUpdate(opts.user, 'OAuth2User', require('./models/user'));

  return require('./grants')(schemas);
};


module.exports.secretGenerator = utils.secretGenerator;


module.exports.passwordEncoder = utils.passwordEncoder;
