const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controller/userController");

router.post("/loginuser", loginUser);
router.post("/registeruser", registerUser);

module.exports = router;
