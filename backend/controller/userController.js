const model = require("../model/model");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
  try {
    console.log("Incoming", req.body);
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new model({ ...req.body, password: hashPassword });
    const saved = await newUser.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(400).json({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await model.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect password" });
    }
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
};
