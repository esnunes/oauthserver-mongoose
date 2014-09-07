
module.exports = function (schema) {

  schema.add({
    username: { type: String, unique: true },
    password: { type: String },
    createdAt: { type: Date, default: Date.now }
  });

};
