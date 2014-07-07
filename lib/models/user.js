
module.exports = function (schema, options) {

  schema.add({
    username: { type: String, unique: true },
    password: { type: String },
    createdAt: { type: Date, default: Date.now }
  });

};
