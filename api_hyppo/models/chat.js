const { DataTypes } = require("sequelize");

const { DataTypes } = require("sequelize"); {
    const Chat = instance.define("Chat", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // userId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        pseudo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        is_admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    });

    return Chat;
};