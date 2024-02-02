const express = require('express')
const routers = require('./src/routers')
const {PORT} = require("./src/configs/env")

const app = express()
app.use(express.json())
app.use(routers)

app.listen(PORT, () => {
  console.log(`Service running at port`, PORT)
})