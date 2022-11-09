const User = require("../models/usres");
const bcrypt = require("bcrypt");


exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  const hashpassword = await bcrypt.hash(password, 10);
  try {
    const userInDB = await User.find({ email: email });
    if (userInDB.length == 0) {
      const data = new User({ name, email, hashpassword });
      await data.save();
      if (data) {
        const token = jwt.sign({ userId: data.id }, process.env.JWT_SECRET, {
          expiresIn: "10000h",
        });

      }
      res.status(201).json({
        message: "Register Successfully",
        token: token,
      });
    } else {
      res.status(200).json({
        message: "this email is Alredy Used",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 0,
      message: "something went wrong",
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  //const newPassword = await bcrypt.hash(password, 10);
  const data = await Admin.findOne({
    where: { email: email },
  });
  // console.log(data);
  try {
    const isData = await bcrypt.compare(password, data.newPassword);


  } catch (err) {
    return res.status(500).json({
      status: 0,
      message: "something went wrong",
    });
  }
};

