const logger = require("./logger");

function routeLogger(req, res, next){
    logger.info("Path", req.path);
    logger.info("Method", req.method);
    logger.info("Body", req.body);
    next();
}

module.exports = {routeLogger};