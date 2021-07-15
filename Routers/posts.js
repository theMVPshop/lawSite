const express = require("express");
const postsControllers = require("../Controllers/posts");

const router = express.Router();

router.post("/", postsControllers.createPosts);

router.get("/", postsControllers.getAllPosts);

router.get("/date/:startdate/:enddate", postsControllers.getPostsByDate);

router.put("/:id", postsControllers.updatePostId);

router.delete("/:id", postsControllers.deletePostById);



module.exports = router;