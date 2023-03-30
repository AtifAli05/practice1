const express = require("express");
const verifyToken=require('../middlewares/validationTokenHnadler')
const {
  registerUser,
  loginUser,
  currentUserInfo,
} = require("../controllers/userController");
const userRouter = express.Router();
userRouter.post("/register", registerUser);
userRouter.post("/Login", loginUser);
userRouter.get("/currentUserInfo",verifyToken, currentUserInfo);
module.exports = userRouter;
 