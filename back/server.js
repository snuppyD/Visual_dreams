const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.urlencoded({ extended: true }))

app.use('/static', express.static(__dirname + '/assets'))

app.use('/api/dreams', require('./routes/dreams'))

mongoose.connect('mongodb://localhost:27017/VadikDB').then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })
})
