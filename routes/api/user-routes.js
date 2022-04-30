const router = require("express").Router();

// import functions from controller here
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUserData,
} = require("../../controllers/user-controller");

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUserData);

module.exports = router;
