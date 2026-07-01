const express = require("express");
const BlogController = require("../controller/blogController");
const Router = express.Router();

Router.post("/api/blogs", BlogController.addBlog);
Router.get("/api/blogs", BlogController.getBlogs);
Router.get("/api/blogs/:id", BlogController.getBlog);

module.exports = Router;