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
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }
});


BlogSchema.set("toJSON", {transform:(doc, return_values)=>{
    return_values.id = doc._id;
    delete return_values._id;
    delete return_values.__v;
}})

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog; 