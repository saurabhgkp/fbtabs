var express = require("express");
var router = express.Router();
var adminController = require("../controllers/admin");

/* GET users listing. */
router.get("/", function (req, res) {
  res.send("this is Admin Route");
});

//router.get("/getAllUserData", adminController.getAllUserData);

//add product // edit // delete //
//status delivery with mail to user

module.exports = router;
