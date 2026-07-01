const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title:{
        type: String,
        minlength: 2,
        required: true
    },
     author:{
        type: String,
        minlength: 2,
        required: true
    },
        url:{
        type: String,
        default: null
    },
        likes:{
        type: Number,
        default: 0
    }
});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;