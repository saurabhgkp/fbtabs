var express = require("express");
var router = express.Router();
var userController = require("../controllers/users");
//const isAuth = require('../middleware/isAuth')

router.get("/", function (req, res) {
  res.send("this is User Route");
});

router.post("/register", userController.register);

router.get("/verify/:userId/:uniqueString", userController.verify);


//router.post("/login", userController.login);



module.exports = router;
