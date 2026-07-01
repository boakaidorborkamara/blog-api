const Blog = require("../model/blogModel");
const logger = require("../utils/logger");

const addBlog = (req, res, next)=>{
    logger.info("Adding a new blog...");

    let {title, author} = req.body;

    let new_blog = new Blog({title, author});

    new_blog.save()
    .then(blog =>{
        logger.info("blog added", blog)
        res.status(201).json({success:true, message:"Blog created successfully!", data: blog})
    })
    .catch(err => next(err));
}

const getBlogs = (req, res, next)=>{
    Blog.find({})
    .then(result =>{
        res.status(200).json({success:true, message:"Blogs fetched successfully", data:result});
    })
    .catch(err => next(err));
}

const getBlog = (req, res, next)=>{
    let id = req.params.id;

    Blog.findById(id)
    .then(blog =>{
        if(blog === null){
            return res.status(404).json({success:false, message:"Blog doesn't exist!", data:null});
        }

        res.status(200).json({success:true, message:"Blog fetched successfully!", data:blog});
    })
    .catch(err => next(err));
}

module.exports = {
    addBlog,
    getBlogs,
    getBlog
}