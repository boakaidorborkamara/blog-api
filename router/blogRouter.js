const express = require("express");
const BlogController = require("../controller/blogController");
const blogRouter = express.Router();

blogRouter.post("/blogs", BlogController.addBlog);
blogRouter.get("/blogs", BlogController.getBlogs);
blogRouter.get("/blogs/:id", BlogController.getBlog);

module.exports = blogRouter;