
module.exports = function (schema, options) {

  schema.add({
    clientId: { type: String, required: true },
    userId: { type: String },
    accessToken: { type: String, unique: true, required: true },
    expires: { type: Date },
    createdAt: { type: Date, default: Date.now }
  });

};
