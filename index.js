const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;
const cors = require("cors");
var logger = require("morgan");

app.use(express.json());
app.use(cors("*"));
app.use(logger("dev"));
// routes
const indexRouter = require("./routes/index");
const userRouter = require("./routes/users");
const paymentRouter = require("./routes/payment");

app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/payment", paymentRouter);

// database and server connection

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
