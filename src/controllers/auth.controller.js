const authModel = require("../models/auth.model")
const argon2 = require('argon2');
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../configs/env")

module.exports = {
  login: async(req, res) => {
    try {
      const {email, password} = req.body
      const result = await authModel.login(email)
      const user = result[0]
      if(!user){
        res.status(401).json({
          message: "login failed, email or password wrong"
        })
        return
      }
      const passwordVerified = await argon2.verify(user.password, password)
      if(!passwordVerified){
        res.status(401).json({
          message: "login failed, email or password wrong"
        })
        return
      }
      const token = jwt.sign({email: user.email}, JWT_SECRET);
      res.status(200).json({
        token,
        message: "login success"
      })
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  },
  register: async(req, res) => {
    try {
      const {email, password} = req.body
      const hash = await argon2.hash(password);
      const result = await authModel.register({email, password: hash})
      res.status(200).json({
        data: result,
        message: "register success"
      })
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  }
}