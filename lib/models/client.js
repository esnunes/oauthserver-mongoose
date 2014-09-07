
module.exports = function (schema) {

  schema.add({
    secret: { type: String, required: true },
    grantTypes: [ { type: String } ],
    createdAt: { type: Date, default: Date.now }
  });

};
