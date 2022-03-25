const router = require("express").Router();
const {
  updateUser,
  deleteUser,
  unfollowUser,
  followUser,
  getUser,
} = require("../controllers/user.Controllers");
const User = require("../models/User");
//update user
router.put("/:id", updateUser);
//delete user
router.delete("/:id", deleteUser);
//get a user
router.get("/:id", getUser);
// follow a user
router.put("/:id/follow", followUser);
// unfollow user
router.put("/:id/unfollow", unfollowUser);
module.exports = router;
