const mongoose = require('mongoose')

const chatModel = mongoose.Schema(
    {
        chatName: { type: String, trim: true },
        isGroupChat: { type: Boolean, default: false },
        users: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", 
            
        }],

        latestMsg: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            
        },

        groupAd: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
        },

    },
    {
        timestamp: true,
    }

)

const Chat = mongoose. model("Chat", chatModel)

module.exports = Chat;
