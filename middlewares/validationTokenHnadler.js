const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
console.log("sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf");
const verifyToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];

    const verified = jwt.verify(token, process.env.ACCESS_TOKEN);
    if (verified) {
      req.user = verified;
      next();
      return;
    }
    if (!token) {
      res.status(401);
      throw new Error("User is not authorized or token is missing");
    }
  }
});
module.exports = verifyToken;
