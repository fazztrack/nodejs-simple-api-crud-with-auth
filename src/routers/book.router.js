const express = require('express')
const bookController = require("../controllers/book.controller")
const bookRouter = express.Router()

bookRouter.get('/', bookController.getAll)
bookRouter.get('/:id', bookController.getDetail)
bookRouter.post('/create', bookController.create)
bookRouter.put('/update/:id', bookController.update)
bookRouter.delete('/delete/:id', bookController.destroy)

module.exports = bookRouter