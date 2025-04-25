const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  // Logic for verifying token goes here
  // If valid, call next()
  next();
};

module.exports = { authMiddleware };
