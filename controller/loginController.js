const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require("../utils/config");
const User = require("../model/userModel");

const logIn = (req, res, next)=>{
    console.log("logging in...");

    let {username, password} = req.body;

    // validate for missing fields
    // if(!username){
    //     return res.status(400).json({success:false, message:"username is required!", data:null})
    // }
    // else if(!password){
    //     return res.status(400).json({success:false, message:"password are required!", data:null})
    // }

    User.findOne({username:username}).lean()
    .then(user =>{

        console.log("getting user");

        // check if there's a valid user 
        if(!user){
            return res.status(401).json({success:"failed", message:"Invalid credential"});
        }

        // check password correctness 
        bcrypt.compare(password, user.password).then(function(result) {
            // result == true

            // handle wrong password 
            if(!result){
                return res.status(401).json({success:"failed", message:"Invalid credentials", data:null});
            }

            // handle correct password 
            delete user.password;
            console.log("user", user)
            let token = jwt.sign({ username: user.username, id:user.id }, JWT_SECRET, { expiresIn: '24h' });

            console.log(typeof user)
            
            res.status(200).json({success:true, msg:"Login successful", token:token, data: user});
        });
    }) 


    

    
}

module.exports = {
    logIn
}