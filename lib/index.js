var utils = require('./utils');


var oas = module.exports = {};


oas.plugins = {
  accessToken: require('./models/access-token'),
  authorizationCode: require('./models/authorization-code'),
  client: require('./models/client'),
  refreshToken: require('./models/refresh-token'),
  user: require('./models/user')
};


oas.model = function (mongoose, opts) {
  opts = opts || {};

  var addOrUpdate = function (model, defaultName, plugin) {
    if (model) return model;

    var schema = mongoose.Schema({});
    schema.plugin(plugin);

    return mongoose.model(defaultName, schema);
  };

  var models = {};

  models.AccessToken = addOrUpdate(opts.accessToken, 'OAuth2AccessToken', oas.plugins.accessToken);
  models.AuthorizationCode = addOrUpdate(opts.authorizationCode, 'OAuth2AuthorizationCode', oas.plugins.authorizationCode);
  models.Client = addOrUpdate(opts.client, 'OAuth2Client', oas.plugins.client);
  models.RefreshToken = addOrUpdate(opts.refreshToken, 'OAuth2RefreshToken', oas.plugins.refreshToken);
  models.User = addOrUpdate(opts.user, 'OAuth2User', oas.plugins.user);

  return require('./grants')(models);
};


oas.secretGenerator = utils.secretGenerator;


oas.passwordEncoder = utils.passwordEncoder;
