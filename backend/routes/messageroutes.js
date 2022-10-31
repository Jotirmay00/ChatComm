const express = require("express");
const { sendMessage, allMessages } = require("../controlers/messageControlers");
const { protect } = require("../middleware/authMiddleware");


const router = express.Router()

 router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

module.exports = router;