const { Number } = require("mongoose");
const mongoose = require("mongoose");

const checkouts = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    //  ProductId:  {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Product",
    // },
    Schedule: String,
    status: String,
    instructions: String,
    isInstructions: {
        type: Boolean,
        default: false,
    },
    address: String,
    phoneNo: Number,
    Subtotal: Object,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

var Checkout = mongoose.model("checkout", checkouts);

module.exports = Checkout;
