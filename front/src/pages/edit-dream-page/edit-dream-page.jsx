import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDream, updateDream } from '../../store/dream/dreamSlice'
import { useParams, useNavigate } from 'react-router-dom'
import { paths } from '../../paths'
import { Button } from '../../components/button'
import { StyledForm, StyledDatePicker } from '../../styled/CreateDreamPage.styled'
import { StyledInput } from '../../styled/Input.Styled'
import { ContentWrapper } from '../../components/content-wrapper'
import styles from './styles.module.css'

export const EditDreamPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { dream } = useSelector(state => state.dream)

  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [description, setDescription] = useState()
  const [dreamImage, setDreamImage] = useState()
  const [dreamVideo, setDreamVideo] = useState()
  const [finalTime, setFinalTime] = useState()

  const handleUpdateDream = () => {
    const createTime = new Date()
    const formData = new FormData()
    formData.append('_id', id)
    formData.append('name', name)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('dreamImage', dreamImage)
    formData.append('dreamVideo', dreamVideo)
    formData.append('finalTime', finalTime)
    formData.append('createTime', createTime)
    for (let pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
  }


    dispatch(updateDream(formData)).then(res => {
      if (!res.error) {
        navigate(`${paths.dream}/${id}`, { replace: true })
      }
    })
  }

  const changeName = e => {
    setName(e.target.value)
  }
  const chancePrice = e => {
    setPrice(e.target.value)
  }
  const chanceDescription = e => {
    setDescription(e.target.value)
  }
  const chanceDreamImage = e => {
    setDreamImage(e.target.value)
  }
  const chanceDreamVideo = e => {
    setDreamVideo(e.target.value)
  }
  const chanceTime = date => {
    setFinalTime(date)
  }

  useEffect(() => {
    dispatch(getDream(id)).then(() => {
      if (dream) {
        setName(dream.name)
        setPrice(dream.price)
        setDescription(dream.description)
        setDreamImage(dream.dreamImage)
        setDreamVideo(dream.dreamVideo)
        setFinalTime(new Date(dream.finalTime))
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, id])

  return (
    <div>
      <ContentWrapper className={styles.editDream}>
      <Button
        onClick={() => navigate(-1)}
        isBackButton={true}
        containerClassName={styles.backButtonContainer}
      >
        Назад
      </Button>
        <StyledForm>
          <span>Dreams name</span>
          <StyledInput type="text" placeholder="name" value={name} onChange={changeName} />
          <span>Dreams price</span>
          <StyledInput type="text" placeholder="name" value={price} onChange={chancePrice} />
          <span>Dreams Image</span>
          <StyledInput type="text" placeholder="name" value={dreamImage} onChange={chanceDreamImage} />
          <span>Dreams Time</span>
          <StyledDatePicker placeholderText="Оберіть кінцеву дату" selected={finalTime} onChange={chanceTime} minDate={new Date()} />
          <span>Dreams Video</span>
          <StyledInput type="text" placeholder="name" value={dreamVideo} onChange={chanceDreamVideo} />
          <span>Dreams description</span>
          <StyledInput type="text" placeholder="name" value={description} onChange={chanceDescription} />
          <ContentWrapper>
            <Button onClick={handleUpdateDream}>Обновити</Button>
          </ContentWrapper>
        </StyledForm>
      </ContentWrapper>
    </div>
  )
}
