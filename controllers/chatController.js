const chatModel = require("../models/chatModel");

// create chat
const createChat = async (req, res) => {
  const { firstId, secondId } = req.body;

  try {
    const chat = await chatModel.findOne({
      members: { $all: [firstId, secondId] },
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

/// find all chats

// find single chat
