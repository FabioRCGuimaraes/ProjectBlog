const mongoose = require("mongoose");

let projectSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

module.exports = mongoose.model("Project", projectSchema);