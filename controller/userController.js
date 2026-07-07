const User = require("../model/userModel");
const logger = require("../utils/logger");

const addUser = (req, res, next)=>{
    logger.info("Adding a new blog...");

    let {username, name, password} = req.body;

    let new_user = new User({username, name});

    new_user.save()
    .then(blog =>{
        logger.info("user added", user)
        res.status(201).json({success:true, message:"User created successfully!", data: user})
    })
    .catch(err => next(err));
}

const getUsers = (req, res, next)=>{
    User.find({})
    .then(result =>{
        res.status(200).json({success:true, message:"Users fetched successfully", data:result});
    })
    .catch(err => next(err));
}

const getUser = (req, res, next)=>{
    let id = req.params.id;

    User.findById(id)
    .then(user =>{
        if(user === null){
            return res.status(404).json({success:false, message:"User doesn't exist!", data:null});
        }

        res.status(200).json({success:true, message:"User fetched successfully!", data:user});
    })
    .catch(err => next(err));
}

module.exports = {
    addUser,
    getUsers,
    getUser
}