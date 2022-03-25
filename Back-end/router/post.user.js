const router = require("express").Router();
const {
  createPost,
  deletePost,
  likePost,
  likeDislikePost,
  getPost,
  getTimeLinePost,
} = require("../controllers/Post.Controllers");
const Post = require("../models/Post");
const User = require("../models/User");
// create a post
router.post("/", createPost);
// update a post
router.put("/:id");
// delete a post
router.delete("/:id", deletePost);
// like dislike a post
router.put("/:id/like", likeDislikePost);
// get a post
router.get("/:id", getPost);
//  get timeline posts
router.get("/timeline/all", getTimeLinePost);

module.exports = router;
