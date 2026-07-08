const bcrypt = require('bcrypt');
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

    User.findOne({username:username})
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
            res.status(200).json({msg:"Logging in..."})
        });
    }) 


    

    
}

module.exports = {
    logIn
}