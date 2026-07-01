const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        minlength: 2,
        required: true
    },
    name:{
        type: String,
        minlength: 2,
        required: true
    },
    
});


UserSchema.set("toJSON", {transform:(doc, return_values)=>{
    return_values.id = doc._id;
    delete return_values._id;
    delete return_values.__v;
}})

const User = mongoose.model("Blog", UserSchema);

module.exports = User;