const Posts = require("../models/posts");

exports.addProduct = async (req, res) => {
  const { name, category, title, price } = req.body;
  const data = new DataPost({ name, category, title, price });
  try {
    await data.save();
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
  }
};

exports.getAllUserData = async (req, res) => {
  try {
    const alluser = await User.find();

    res.status(200).json({
      status: 1,
      message: alluser,
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "error",
    });
    console.log(error);
  }
};

exports.getData = async (req, res) => {
  try {
    const data = await Posts.find();
    res.status(200).json({
      status: 1,
      message: data,
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "error",
    });
    console.log(error);
  }
};
