const logger = require("./logger");

function routeLogger(req, res, next){
    logger.info("Path", req.path);
    logger.info("Method", req.method);
    logger.info("Body", req.body);
    next();
}

function errorHandler(error, req, res, next){
    console.log("error hangler running")
    res.status(500).json(error.message);
}

module.exports = {routeLogger, errorHandler};