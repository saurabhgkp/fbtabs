const User = require("../models/usres");
const mailVarification = require("../utils/mailVerification");
const stripe = require("stripe")(process.env.STRIPE_KEY);

exports.sessionPayment = async (req, res) => {
  const { success_url, cancel_url, totalAmount } = req.query;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: "Payment" },
          unit_amount: totalAmount,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: success_url,
    cancel_url: cancel_url,
  });
  res.redirect(303, session.url);
};

exports.Webhook = async (request, response) => {
  const event = request.body;

  // Handle the event
  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object;
      // Then define and call a method to handle the successful payment intent.
      //update db and send payment mail to user
      break;
    case "payment_intent.payment_failed":
      intent = event.data.object;
      const message =
        intent.last_payment_error && intent.last_payment_error.message;
      console.log("Failed:", intent.id, message);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
};
