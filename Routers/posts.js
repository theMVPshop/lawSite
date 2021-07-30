const express = require("express");
const router = express.Router();
const posts = require("../Controllers/posts");


// router.post("/", posts.createPosts);

router.get("/getAll", posts.getAllPosts);

router.get("/date/:startdate/:enddate", posts.getPostsByDate);

router.put("/:id", posts.updatePostId);

router.delete("/:id", posts.deletePostById);



module.exports = router;