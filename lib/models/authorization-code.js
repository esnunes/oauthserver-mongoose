
module.exports = function (schema) {

  schema.add({
    userId: { type: String, required: true },
    clientId: { type: String, required: true },
    authCode: { type: String, unique: true, required: true },
    expires: { type: Date },
    createdAt: { type: Date, default: Date.now }
  });

};
