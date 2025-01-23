const ChatService = require("../services/Chat.service");

async function getAllChats(req, res) {
    try {
        const Chats = await ChatService.getAllChats();
        res.status(200).json(Chats);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

async function getChatById(req, res) {
    try {
        const Chat = await ChatService.getChatById(req.params.id);
        if (!Chat) {
            res.status(404).json({ error: "Chat not found" });
        } else {
            res.status(200).json(Chat);
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

async function addChat(req, res) {
    try {
        const { message, zone, user_pseudo, is_admin} = req.body;
        const newChat = await ChatService.addChat({ 
            message,
            zone,
            user_pseudo,
            is_admin,
        });
        res.status(201).json(newChat);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

async function updateChat(req, res) {
    try {
        const updatedChat = await ChatService.updateChat(req.params.id, req.body);
        if (!updatedChat) {
            res.status(404).json({ error: "Chat not found" });
        } else {
        res.status(200).json(updatedChat);
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

async function deleteChat(req, res) {
    try {
        const deleted = await ChatService.deleteChat(req.params.id);
        if (!deleted) {
            res.status(404).json({ error: "Chat not found" });
        } else {
        res.status(200).json({ message: "Chat deleted successfully" });
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

module.exports = {
    getAllChats,
    getChatById,
    addChat,
    updateChat,
    deleteChat,
};