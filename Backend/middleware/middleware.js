const jwt = require("jsonwebtoken");
const { model } = require("mongoose");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // console.log("Autuh Header", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(404).json({
      msg: "Missing auth",
    });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // console.log("Decoded", decoded);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(404).json({
      msg: `Some error occured : ${error}`,
    });
  }
};

module.exports = {
  authMiddleware,
};
