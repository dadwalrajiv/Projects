const express = require("express");
const router = express.Router();

// @route    Get api/prfile
// @desc     Test Route
// @access   Public

router.get("/", (rew, res) => res.send("Profile Route"));

module.exports = router;
