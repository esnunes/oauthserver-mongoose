
module.exports = function (schema) {

  schema.add({
    userId: { type: String },
    clientId: { type: String, required: true },
    accessToken: { type: String, unique: true, required: true },
    expires: { type: Date },
    createdAt: { type: Date, default: Date.now }
  });

};
