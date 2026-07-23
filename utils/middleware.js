const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");
const logger = require("./logger");

function routeLogger(req, res, next){
    logger.info("Path", req.path);
    logger.info("Method", req.method);
    logger.info("Body", req.body);
    next();
}

function errorHandler(error, req, res, next){
    console.log("err", error)
    if(error.name === "ValidationError"){
        return res.status(400).json({success:false, message: error.message, data:null});
    }
    else if(error.name === "CastError"){
        return res.status(400).json({success:false, message: "Invalid ID format!", data:null});
    }
    else if (error.name === "TokenExpiredError"){
        res.json({msg:"token expired."})
    }
    else{
        return res.status(500).json({success:false, message: "Server encounter an error!", data:null});
    }
    
    next();
}

function notFound(req, res, next){
    res.status(404).json({success:false, message:"Route not found!", data:null});
}

function auth(req, res, next){
    let authHeader = req.headers.authorization;

    // check if authorization header was provided 
    if(!authHeader){
        res.status(401).json({success:false, message:"Authorization header missing!"});
    }


    // extract token 
    let token = authHeader.split(" ")[1];

    // check if token was provided 
    if(!token){
        res.status(401).json({success:false, message:"Token missing!"});
    }

    // extract payload form token 
    let decoded = jwt.verify(token, JWT_SECRET);

    // add payload to request object 
    req.user = decoded;

    next();

}

module.exports = {routeLogger, errorHandler, notFound, auth};