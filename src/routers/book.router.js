const express = require('express')
const bookController = require("../controllers/book.controller")
const bookRouter = express.Router()

const {authMiddleware} = require("../middlewares/auth.middleware")

bookRouter.get('/', bookController.getAll)
bookRouter.get('/:id', bookController.getDetail)
bookRouter.post('/create', authMiddleware, bookController.create)
bookRouter.put('/update/:id', authMiddleware, bookController.update)
bookRouter.delete('/delete/:id', authMiddleware, bookController.destroy)

module.exports = bookRouter