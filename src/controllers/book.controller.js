const bookModel = require("../models/book.model")
module.exports = {
  getAll: async(req, res) => {
    try {
      const result = await bookModel.getAll()
      res.status(200).json({
        data: result,
        message: "get all books success"
      })
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  },
  getDetail: async(req, res) => {
    try {
      const id = req.params.id
      const result = await bookModel.getDetail(id)
      res.status(200).json({
        data: result[0],
        message: "get detail book success"
      })
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  },
  create: async(req, res) => {
    try {
      const {title, description, author} = req.body
      const result = await bookModel.create({title, description, author})
      res.status(200).json({
        data: result,
        message: "create book success"
      })
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  },
  update: async(req, res) => {
    try {
      const id = req.params.id
      const {title, description, author} = req.body
      const result = await bookModel.update({id, title, description, author})
      res.status(200).json({
        data: result,
        message: "update book success"
      })
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  },
  destroy: async(req, res) => {
    try {
      const id = req.params.id
      const result = await bookModel.destroy(id)
      res.status(200).json({
        data: result,
        message: "delete book success"
      })
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  },
}