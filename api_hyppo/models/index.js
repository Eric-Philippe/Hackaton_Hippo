const { Sequelize } = require("sequelize");
//const dbConfig = require("../config/db.config");
const dbmsConfig = require("../config/dbms.config");

// Création de l'instance Sequelize
//const instance = new Sequelize(dbConfig);
const instance = new Sequelize(dbmsConfig);

// Models
const models = {};
models.Chat = require("./Chat.model")(instance);
models.Activity = require("./Activity.model")(instance);

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
