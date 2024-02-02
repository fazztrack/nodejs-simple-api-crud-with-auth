const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../configs/env")

module.exports = {
  authMiddleware: (req, res, next) => {
    try {
      const {authorization} = req.headers
      jwt.verify(authorization, JWT_SECRET);
      next()
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  }
}