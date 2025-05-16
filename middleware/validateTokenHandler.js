const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler((req, res, next) => {
  console.log("User validation in progress...");
  let token;
  const authHeader = req.headers.authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];

    if (token) {
      jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decodedToken) => {
          if (err) {
            res.status(401);
            throw new Error("User is not authorized!");
          }
          req.user = decodedToken.user;
          next();
        }
      );
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("User is not authorized or token is missing!");
  }
});

module.exports = validateToken;
