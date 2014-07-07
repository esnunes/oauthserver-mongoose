var utils = require('../utils');


module.exports = function (schema, options) {

  schema.add({
    userId: { type: String, required: true },
    secret: { type: String, required: true },
    grantTypes: [ { type: String } ],
    createdAt: { type: Date, default: Date.now }
  });

};
