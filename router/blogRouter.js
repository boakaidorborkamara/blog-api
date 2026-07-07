const express = require("express");
const BlogController = require("../controller/blogController");
const blogRouter = express.Router();

blogRouter.post("/api/blogs", BlogController.addBlog);
blogRouter.get("/api/blogs", BlogController.getBlogs);
blogRouter.get("/api/blogs/:id", BlogController.getBlog);

module.exports = blogRouter;