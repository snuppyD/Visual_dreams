const mongoose = require('mongoose')

const DreamsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dreamImage: {
    type: String,
    required: true,
  },
  dreamVideo: {
    type: String,
  },
  finalTime: {
    type: String,
  },
  createTime: {
    type: Date,
    default: new Date(),
  },
  descriptionTodo: {
    type: Array,
  },
})

module.exports = mongoose.model('Dream', DreamsSchema)
