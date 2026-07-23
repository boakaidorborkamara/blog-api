const express = require("express");
const {auth} = require("../utils/middleware")
const BlogController = require("../controller/blogController");
const blogRouter = express.Router();

blogRouter.post("/blogs", auth, BlogController.addBlog);
blogRouter.get("/blogs", BlogController.getBlogs);
blogRouter.get("/blogs/:id", BlogController.getBlog);

module.exports = blogRouter;