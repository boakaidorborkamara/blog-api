const Blog = require("../model/blogModel");
const logger = require("../utils/logger");

const addBlog = (req, res)=>{
    logger.info("Adding a new blog...");

    let {title, author, url, likes} = req.body;

    let new_blog = new Blog({title, author, url, likes});

    new_blog.save()
    .then(blog =>{
        console.log("blog added", blog)
        res.status(201).json(blog)
    })
    .catch(err => console.log(err));
}


module.exports = {
    addBlog
}