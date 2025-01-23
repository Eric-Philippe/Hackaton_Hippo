const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db.config");

// Création de l'instance Sequelize
const instance = new Sequelize(dbConfig);

// Models
const models = {};
models.Role = require("./Role.model")(instance);
models.User = require("./User.model")(instance);

// // Associations
Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = {
  instance,
  ...models,
};
