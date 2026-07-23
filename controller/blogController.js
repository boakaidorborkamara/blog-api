const Blog = require("../model/blogModel");
const User = require("../model/userModel");
const logger = require("../utils/logger");

const addBlog = async (req, res, next)=>{
    try{
        logger.info("Adding a new blog...");

        // get logged in user 
        let user = await User.findOne({username:req.user.username}).exec();
        
        // get details for new blog 
        let {title, author} = req.body;

        // create and add new blog to db 
        let new_blog = new Blog({title, author, user : user._id});
        let blog = await new_blog.save();

        // update user to include new blog for logged in user 
        user.blogs = [...user.blogs, blog.id];
        let uresult = await user.save();

    
        
        logger.info("blog added", blog)
        res.status(201).json({success:true, message:"Blog created successfully!", data: blog})
    }
    catch(err){
        next(err)
    }
    
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