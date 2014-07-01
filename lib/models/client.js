var utils = require('../utils');


module.exports = function (schema, options) {

  schema.add({
    secret: { type: String, required: true },
    grantTypes: [ { type: String } ],
    createdAt: { type: Date, default: Date.now }
  });


  schema.pre('save', function (next) {
    if (this.isNew) this.secret = utils.secretGenerator();

    next();
  });

};
