const Blog = require("../model/blogModel");
const logger = require("../utils/logger");

const addBlog = (req, res)=>{
    logger.info("Adding a new blog...");

    let req_body = req.body;

    let new_blog = new Blog({title:"dkdk", author:"dkdk"})

    new_blog.save()
    .then(blog =>{
        console.log("blog added")
        res.status(201).json(blog)
    })
    .catch(err => console.log(err));
}


module.exports = {
    addBlog
}