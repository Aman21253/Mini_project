require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.log("❌ MongoDB Error:", err));

const postSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    content: String,
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }]
})

module.exports = mongoose.model("post", postSchema);