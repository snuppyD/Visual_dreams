import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

  const [name, setName] = useState()
  const [price, setPrice] = useState(null)
  const [description, setDescription] = useState('')
  const [capacity, setCapacity] = useState(null)
  const [dreamImage, setDreamImage] = useState('')
  const [dreamVideo, setDreamVideo] = useState('')
  const [finalTime, setFinalTime] = useState({ dream: new Date() })
  const [chance, setChance] = useState({ name: '', price: '', description: '', capacity: '', dreamImage: '', dreamVideo: '', finalTime: new Date() })

  const handleUpdateDream = () => {
    const formData = new FormData()
    formData.append('_id', id)
    formData.append('name', name)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('capacity', capacity)
    formData.append('dreamImage', dreamImage)
    formData.append('dreamVideo', dreamVideo)
    // formData.append('finalTime', finalTime)
    // const s = formData.getAll('price', 'description', 'capacity', 'dreamImage', 'dreamVideo', 'finalTime')
    // for (let pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1])
    // }
    console.log(formData)
    // const param = new URLSearchParams(formData)
    dispatch(updateDream(formData))
  }

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
        setChance({
          name: dream.name,
          price: dream.price,
          description: dream.description,
          capacity: dream.capacity,
          dreamVideo: dream.dreamVideo,
          finalTime: new Date(dream.finalTime),
        })
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              onChange={e => {
                setFinalTime(e.target.value)
              }}
              minDate={new Date()}
            />
            <StyledInput name="name" placeholder="Назва мрії" value={dream.name} onChange={e => setName(e.target.value)} />

            <StyledInput name="price" placeholder="Ціна мрії" value={price?.dream} onChange={e => setPrice({ price: +e.target.value })} />

            <StyledInput name="capacity" placeholder="Місткість" value={capacity?.dream} onChange={e => setCapacity({ capacity: e.target.value })} />

            <StyledInput
              name="dreamImage"
              placeholder="Фото мрії"
              value={dreamImage?.dream}
              onChange={e => setDreamImage({ dreamImage: e.target.value })}
            />

            <StyledInput
              name="dreamVideo"
              placeholder="Відео мрії"
              value={dreamVideo?.dream}
              onChange={e => setDreamVideo({ dreamVideo: e.target.value })}
            />

            <StyledInput name="dreamVideo" placeholder="Відео мрії" value={description?.dream} onChange={e => setDescription(e.target.value)} />
          </form>
          <Todo
            id={id}
            name={name}
            price={price}
            capacity={capacity}
            dreamImage={dreamImage}
            dreamVideo={dreamVideo}
            finalTime={finalTime}
            description={description}
          />
          <Button onClick={handleUpdateDream}>Обновити</Button>
        </StyledForm>
      </ContentWrapper>
    </div>
  )
}
