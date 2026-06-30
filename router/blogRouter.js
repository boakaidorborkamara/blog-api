const express = require("express");
const BlogController = require("../controller/blogController");
const Router = express.Router();

Router.post("/api/blogs", BlogController.addBlog);

module.exports = Router;