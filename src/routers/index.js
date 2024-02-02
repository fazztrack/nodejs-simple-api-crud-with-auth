const express = require('express')
const router = express.Router()
const bookRouter = require("./book.router")

router.get('/', (req, res) => {
  res.json({
    message: 'success'
  })
})
router.use("/books", bookRouter)

module.exports = router