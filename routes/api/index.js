const router = require("express").Router();
const reactionRoutes = require("./reaction-routes.js");
const thoughtRoutes = require("./thought-routes.js");
const userRoutes = require("./user-routes");
const friendRoutes = require("./friend-routes");

router.use("/reactions", reactionRoutes);
router.use("/thoughts", thoughtRoutes);
router.use("/users", userRoutes);
router.use("/friends", friendRoutes);

module.exports = router;
