var express = require("express");
var router = express.Router();
var paymentController = require("../controllers/payment");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("working payment");
});

//stripe and webhook   sessionPayment
router.post("/sessionPayment", paymentController.sessionPayment);

router.post("/Webhook", paymentController.Webhook);
// order place mail

module.exports = router;
