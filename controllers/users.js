const User = require("../models/usres");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');


exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const hashpassword = await bcrypt.hash(password, 10);
  // console.log(name, email, password, hashpassword);
  try {
    const userInDB = await User.find({ email: email });
    if (userInDB.length == 0) {
      const data = new User({ name, email, hashpassword });
      await data.save();
      if (data) {
        const token = jwt.sign({ userId: data._id }, "saurabh", {
          expiresIn: "10000h",
        });

        //mail send function here

        console.log(token);
        res.status(201).json({
          message: "verification mail is sent Successfully",
          status: " verification panding",
          token: token,
        });
      }
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

// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   //const newPassword = await bcrypt.hash(password, 10);
//   const data = await Admin.findOne({
//     where: { email: email },
//   });
//   // console.log(data);
//   try {
//     const isData = await bcrypt.compare(password, data.newPassword);

//     if (data && isData) {
//       const token = jwt.sign({ id: data.id }, process.env.JWT_SECRET);
//       return res.status(200).json({
//         status: 1,
//         token: token,
//       });
//     } else {
//       res.send("user not found");
//     }
//   } catch (err) {
//     return res.status(500).json({
//       status: 0,
//       message: "something went wrong",
//     });
//   }
// };

