const { DataTypes } = require("sequelize");

module.exports = (instance) => {
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
            allowNull: true,
        },
        is_bot: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: "Chat",
        updatedAt: "updatedAt",
        createdAt: "createdAt",
        timestamps: false,
    });

    return Chat;
};