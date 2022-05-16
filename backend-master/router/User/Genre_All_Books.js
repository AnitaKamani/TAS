const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../Tools/JWT_Token/Token_Verify_User");
const Genre_All_Books = require("../../Controller/Both/All_Books_Of_A_Genre");

router.post("/User/Genre_All_Books", verifyToken, Genre_All_Books.view);
module.exports = router;
