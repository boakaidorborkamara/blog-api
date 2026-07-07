const express = require("Express");
require('dotenv').config();
const mongoose = require("mongoose");
const logger = require("./utils/logger");
const {routeLogger, errorHandler, notFound} = require("./utils/middleware");
const {PORT, MONGO_URL} = require("./utils/config");
const BlogRouter = require("./router/blogRouter");
const UserRouter = require("./router/userRouter");
const loginRouter = require("./router/loginRouter");
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
app.use("/api", BlogRouter, UserRouter, loginRouter);


app.use(errorHandler);
app.use(notFound);



app.listen(PORT, ()=>{
    console.log(`app is listening on ${PORT} `);
})
 
 
