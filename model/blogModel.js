//  title: String,
//   author: String,
//   url: String,
//   likes: Number,

const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
     author:{
        type: String,
        minlength: 2,
        required: true
    }
});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;