const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");
const Router = express.Router();

Router.post("/refreshtoken", (req, res)=>{
    let refresh_token = req.cookies.refresh_token;

    // check if token
    if(!token){
        res.status(401).json({success:false, msg:"", data:null})
    }

    console.log("token", refresh_token)
});

module.exports = Router;