const express = require("express");
const { loginUser, registerUser } = require("../controllers/UserController");
const router = express.Router();

router.post("/", registerUser);

router.post("/login", loginUser);

module.exports = router;
