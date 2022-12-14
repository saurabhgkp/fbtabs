const mongoose = require("mongoose");

const posts = mongoose.Schema({
    title: String,
    details: [],
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

var Post = mongoose.model("Post", posts);

module.exports = Post;
