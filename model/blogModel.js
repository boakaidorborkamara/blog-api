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
        minlength: 2,
        required: true
    },
        likes:{
        type: Number
    }
});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;