const express = require('express')
const router = express.Router()
const bookRouter = require("./book.router")
const authRouter = require("./auth.router")

router.get('/', (req, res) => {
  res.json({
    message: 'success'
  })
})
router.use("/books", bookRouter)
router.use("/auth", authRouter)

module.exports = router