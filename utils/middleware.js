const logger = require("./logger");

function routeLogger(req, res, next){
    logger.info("Path", req.path);
    logger.info("Method", req.method);
    logger.info("Body", req.body);
    next();
}

function errorHandler(error, req, res, next){
    res.status(500).json({success:false, message: error.message, data:null});
    next();
}

module.exports = {routeLogger, errorHandler};