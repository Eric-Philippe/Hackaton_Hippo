const { DataTypes } = require("sequelize");

const { DataTypes } = require("sequelize"); {
    const Chat = instance.define("Chat", {
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
}