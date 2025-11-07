require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.log("❌ MongoDB Error:", err));

const userSchema = mongoose.Schema({
    userName: String,
    name: String,
    age: Number,
    email: String,
    password: String,
    profilepic: {
        type: String,
        default: "default.jpg",
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post",
        }
    ]
})

module.exports = mongoose.model("user", userSchema);