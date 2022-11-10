var express = require("express");
var router = express.Router();
var userController = require("../controllers/users");
const isAuth = require('../middleware/isAuth')

router.get("/", function (req, res) {
  res.send("this is User Route");
});

router.post("/register", userController.register);

router.get("/verify/:userId/:uniqueString", userController.verify);

//Forgot password

router.post("/login", userController.login);

// Address Contact Number add 
router.post("/address", userController.address);
// Address Contact Number edit

// Address Contact Number delete

// checkout model  userId ProductId status address  Schedule time Instructions Subtotal(jsonb)

//Delivery Schedule, Delivery Instructions,Delivery Tip, Subtotal

//stripe payment 

module.exports = router;
