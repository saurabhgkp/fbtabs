const User = require("../models/usres");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email);

  try {
    const userInDB = await User.find({ email: email });
    if (userInDB.length == 0) {
      const newUser = new User({ name, email, password });
      await newUser.save();
      res.status(201).json({
        message: "Register Successfully",
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

    if (data && isData) {
      const token = jwt.sign({ id: data.id }, "saurabh");
      return res.status(200).json({
        status: 1,
        token: token,
      });
    } else {
      res.send("user not found");
    }
  } catch (err) {
    return res.status(500).json({
      status: 0,
      message: "something went wrong",
    });
  }
};

