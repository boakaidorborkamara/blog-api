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
    password:{
        type: String,
        minlength: [5, "Password is less than 5 characters"],
        required: true
    },
    blogs:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Blog",
        defaultValues:[]
    }
});

console.log("creating model....")

UserSchema.set("toJSON", {transform:(doc, return_values)=>{
    return_values.id = doc._id;
    delete return_values._id;
    delete return_values.__v;
}})

const User = mongoose.model("User", UserSchema);

module.exports = User;