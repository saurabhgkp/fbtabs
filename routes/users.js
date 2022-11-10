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


router.post("/addressCreate", isAuth, userController.addressCreate);

router.post("/phoneNoCreate", isAuth, userController.phoneNoCreate);
// checkout model  userId ProductId status address  Schedule time Instructions Subtotal(jsonb)

router.post("/addItem", isAuth, userController.addItem);
router.post("/removeItem", isAuth, userController.removeItem);
//router.post("/checkoutCreate", isAuth, userController.checkoutCreate);

//Delivery Schedule, Delivery Instructions,Delivery Tip, Subtotal

//stripe payment 

module.exports = router;
