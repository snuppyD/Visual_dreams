import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { paths } from '../../paths'
import { getDream, updateDream } from '../../store/dream/dreamSlice'
import { useParams, useNavigate } from 'react-router-dom'
import { Todo } from '../../components/todo/Todo'
import { Button } from '../../components/button'
import { StyledForm, StyledDatePicker } from '../../styled/CreateDreamPage.styled'
import { StyledInput } from '../../styled/Input.Styled'
import { ContentWrapper } from '../../components/content-wrapper'

export const EditDreamPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { dream } = useSelector(state => state.dream)

  const [name, setName] = useState('')
  const [price, setPrice] = useState(null)
  const [description, setDescription] = useState('')
  const [capacity, setCapacity] = useState(null)
  const [dreamImage, setDreamImage] = useState('')
  const [dreamVideo, setDreamVideo] = useState('')
  const [finalTime, setFinalTime] = useState({ dream: new Date() })

  const handleUpdateDream = useCallback(() => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('capacity', capacity)
    formData.append('dreamImage', dreamImage)
    formData.append('dreamVideo', dreamVideo)
    // formData.append('finalTime', finalTime)
    // const s = formData.getAll('price', 'description', 'capacity', 'dreamImage', 'dreamVideo', 'finalTime')
    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }
    // const param = new URLSearchParams(formData)
    dispatch(updateDream(id, formData))
  }, [name, price, description, capacity, dreamImage, dreamVideo, dispatch, id])

  useEffect(() => {
    dispatch(getDream(id)).then(() => {
      if (dream) {
        setName({ dream: dream.name })
        setDreamImage({ dream: dream.dreamImage })
        setPrice({ dream: dream.price })
        setDescription({ dream: dream.description })
        setCapacity({ dream: dream.capacity })
        setDreamVideo({ dream: dream.dreamVideo })
        setFinalTime({ dream: new Date(dream.finalTime) })
      }
    })
  }, [dispatch, id])

  return (
    <div>
      <ContentWrapper>
        <Button onClick={() => navigate(-1)} isBackButton={true}>
          Назад
        </Button>
        <StyledForm enctype="multipart/form-data" method="post" name="fileinfo">
          <h1>Редагувати мрію</h1>
          <form>
            <StyledDatePicker
              placeholderText="Оберіть кінцеву дату"
              selected={finalTime.dream}
              onChange={date => {
                setFinalTime({ dream: date })
              }}
              minDate={new Date()}
            />
            <StyledInput name="name" placeholder="Назва мрії" value={name?.dream} onChange={e => setName(e.target.value)} />
            <StyledInput name="price" placeholder="Ціна мрії" value={price?.dream} onChange={e => setPrice(+e.target.value)} />
            <StyledInput name="capacity" placeholder="Місткість" value={capacity?.dream} onChange={e => setCapacity(e.target.value)} />
            <StyledInput name="dreamImage" placeholder="Фото мрії" value={dreamImage?.dream} onChange={e => setDreamImage(e.target.value)} />
            <StyledInput name="dreamVideo" placeholder="Відео мрії" value={dreamVideo?.dream} onChange={e => setDreamVideo(e.target.value)} />
            <StyledInput name="dreamVideo" placeholder="Відео мрії" value={description?.dream} onChange={e => setDescription(e.target.value)} />
          </form>
          <Todo />
          <Button onClick={handleUpdateDream}>Обновити</Button>
        </StyledForm>
      </ContentWrapper>
    </div>
  )
}
