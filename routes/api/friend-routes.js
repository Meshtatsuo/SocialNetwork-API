const router = require("express").Router();

// import functions from controller here
const {
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

router.route("/:id").post(addFriend).delete(removeFriend);

module.exports = router;
