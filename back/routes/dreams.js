const express = require('express')
const { getDreams, createDream, getDream, deleteDream, updateDream } = require('../controllers/dreams')
const router = express.Router()

const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: './assets/',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  },
})

const upload = multer({ storage })

router.get('/', getDreams)

router.get('/:id', getDream)

router.post('/:id', deleteDream)

router.post('/updateDream/:id', upload.single('dreamImage'), updateDream)

router.post('/', upload.single('dreamImage'), createDream)

module.exports = router
