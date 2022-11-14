import axios from 'axios'

const getDreams = async () => {
  const dreams = await axios.get('/api/dreams')
  return dreams.data
}

const getDream = async id => {
  const dreams = await axios.get(`/api/dreams/${id}`)
  return dreams.data
}

const createDream = async dreamData => {
  const dreams = await axios.post('/api/dreams', dreamData)
  return dreams.data
}

const deleteDream = async id => {
  const dream = await axios.post(`/api/dreams/${id}`)
  return dream.data
}

const updateDream = async dreamData => {
  const config = {
    headers: { 'content-type': 'multipart/form-data' },
  }
  const id = dreamData.get('_id')
  // console.log(id)
  for (let test of dreamData) {
    console.log(test)
  }
  const dream = await axios.post(`/api/dreams/updateDream/${id}`, dreamData, config)
  return dream.data
}

const dreamsService = {
  createDream,
  updateDream,
  deleteDream,
  getDreams,
  getDream,
}

export default dreamsService
