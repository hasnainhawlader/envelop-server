const express = require("express");
const {
  createChat,
  findAllChats,
  findAsSingleChat,
} = require("../controllers/chatController");
const router = express.Router();

/// routes

router.post("/", createChat);

router.get("/:userId", findAllChats);
router.get("/find:firstId/:secondId", findAsSingleChat);
module.exports = router;
