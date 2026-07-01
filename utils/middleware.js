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
    else{
        return res.status(500).json({success:false, message: "Server encounter an error!", data:null});
    }
    
    next();
}

function notFound(req, res, next){
    res.status(404).json({success:false, message:"Route not found!", data:null});
}

module.exports = {routeLogger, errorHandler, notFound};