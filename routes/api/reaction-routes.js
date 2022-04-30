const router = require("express").Router();
const {
  createReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// import functions from controller here

router.route("/:postId").post(createReaction);

router.route("/:postId/:reactionId").delete(deleteReaction);

module.exports = router;
