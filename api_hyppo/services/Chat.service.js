const { Chat } = require("../models/index");

async function getAllChats() {
    return await Chat.findAll();
}

async function getChatById(id) {
    return await Chat.findByPk(id);
}

async function addChat(data) {
    return await Chat.create(data);
}

async function updateChat(id, newData) {
    const Chat = await Chat.findByPk(id);
    if (Chat) {
        await Chat.update(newData);
        return Chat;
    }
    return null;
}

async function deleteChat(id) {
    const Chat = await Chat.findByPk(id);
    if (Chat) {
        await Chat.destroy();
        return true;
    }
    return false;
}

module.exports = {
    getAllChats,
    getChatById,
    addChat,
    updateChat,
    deleteChat,
};