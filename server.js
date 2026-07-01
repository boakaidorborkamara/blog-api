const express = require("Express");
const dotenv = require('dotenv').config();
const mongoose = require("mongoose");
const logger = require("./utils/logger");
const {routeLogger, errorHandler} = require("./utils/middleware");
const {PORT, MONGO_URL} = require("./utils/config");
const BlogRouter = require("./router/blogRouter");
const app = express();



// DB CONFIG 
logger.info("Connecting to database.");

mongoose.connect(MONGO_URL)
.then(()=>{
    logger.info("Database connection successfully!");
})
.catch(err =>{logger.error(err)});



// MIDDLEWARES
app.use(express.json());
app.use(routeLogger); 




// ROUTES 
app.use(BlogRouter);
app.use(errorHandler);



app.listen(PORT, ()=>{
    console.log(`app is listening on ${PORT} `);
})
 
 
