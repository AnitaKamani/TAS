const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../Tools/JWT_Token/Token_Verify_User");
const User_Follow_Controller = require("../../Controller/User/User_Follow");

router.post("/User/UserFollow", verifyToken, User_Follow_Controller.toggle);

module.exports = router;
