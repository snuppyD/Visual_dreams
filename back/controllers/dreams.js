const Dream = require('../db/dreams')

const getDreams = async (req, res) => {
  try {
    const dreams = await Dream.find()

    res.status(200).json(dreams)
  } catch {
    res.status(500).json({ message: 'Not found' })
  }
}

const getDream = async (req, res) => {
  try {
    const dream = await Dream.find({ _id: req.params.id })

    res.status(200).json(dream)
  } catch {
    res.status(404).json({
      message: 'Not found',
    })
  }
}

const deleteDream = async (req, res) => {
  try {
    const deleteDreams = await Dream.findByIdAndRemove({ _id: req.params.id })
    res.status(200).json(deleteDreams)
  } catch (e) {
    res.status(400).json({
      message: 'Not deleted',
    })
  }
}

const updateDream = async (req, res) => {
  try {
    const { name, price, description, capacity, dreamVideo, finalTime } = req.body
    // console.log(req.body)

    const updateDreams = await Dream.updateOne(
      { _id: req.params.id },
      { name, price, description, capacity, dreamVideo, finalTime },
      { upsert: true }
    )
    console.log(updateDreams)
    res.send({ data: updateDreams })
  } catch (err) {
    console.log(err)
    res.status(404).json({ message: 'Not update' })
  }
}

const createDream = async (req, res) => {
  const errors = {}

  if (!req.body.name) {
    errors.name = { message: "Write your dream's name" }
  }

  if (!req.body.price) {
    errors.price = { message: 'Write your price' }
  }

  if (!req.body.description) {
    errors.description = { message: 'Write your description' }
  }

  if (req.body.description.length > 700) {
    errors.description = { message: 'Many words' }
  }

  if (!req.body.capacity) {
    errors.capacity = { message: 'Вкажіть кількість' }
  }

  if (req.body.capacity.length > 2) {
    errors.capacity = { message: 'Вместимость не может быть больше 99' }
  }

  if (!req.file) {
    errors.dreamImage = { message: "Upload your dream's photo" }
  }

  if (!req.body.dreamVideo) {
    errors.dreamVideo = { message: 'Write link in video' }
  }

  if (!req.body.finalTime) {
    errors.finalTime = { message: 'Choose finaly Date' }
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors)
  }

  try {
    const { name, price, description, capacity, dreamVideo, finalTime } = req.body

    const dream = await Dream.create({
      name,
      price,
      description,
      capacity,
      dreamImage: `http://localhost:${process.env.PORT}/static/${req.file.filename}`,
      dreamVideo,
      finalTime,
    })

    res.status(201).json(dream)
  } catch (err) {
    res.status(500).json({ message: 'Не вийшло створити мрію, спробуй пізніше' })
  }
}

module.exports = {
  deleteDream,
  getDreams,
  getDream,
  createDream,
  updateDream,
}
