var express = require("express");
var router = express.Router();
var adminController = require("../controllers/admin");


/* GET users listing. */
router.get("/", function (req, res) {
  res.send("this is Admin Route");
});

//router.get("/getAllUserData", adminController.getAllUserData);



module.exports = router;
