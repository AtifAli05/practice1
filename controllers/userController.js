const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const encrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = asyncHandler(async (req, res) => {
  let userAvailable;
  console.log(req.body);
  const { username, email, password } = req.body;
  console.log(password, "password");
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fileds are mandatory");
  }
  userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("Email already registered");
  }
  const hashpassowrd = await encrypt.hash(password, 10);
  console.log("hashpassowrd", hashpassowrd);
  const user = await User.create({
    username,
    email,
    password: hashpassowrd,
  });
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("user data not valid");
  }
  console.log("user created successfully");
});

const loginUser = async (req, res) => {
  console.log("req.body", req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All inputs required");
  }
  try {
    const user = await User.findOne({ email });
    if (user && (await encrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          username: user.username,
          email: user.email,
          id: user.id,
        },
        process.env.ACCESS_TOKEN,
        { expiresIn: "2h" }
      );
      console.log("successfully logedin");
      res.status(200).json({ accessToken });
    }
  } catch (error) {
    console.log("error in login", error);
  }
};

const currentUserInfo = async (req, res) => {
  console.log(req.body, "req");
  const { email } = req.body;
  if (!email) {
    res.status(400).json({ message: "please enter email" });
    throw new Error("you are gsdf");
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json("user");
      throw new Error("Wrong email");
    }
    res.status(400).json(user);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { registerUser, loginUser, currentUserInfo };
