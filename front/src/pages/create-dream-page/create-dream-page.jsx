import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css'
import { Button } from "../../components/button";
import { ContentWrapper } from "../../components/content-wrapper";
import { paths } from "../../paths";
import { createDream, resetDreamErrors } from "../../store/dream/dreamSlice";
import styles from "./styles.module.css";
import { StyledForm,StyledDatePicker } from "../../styled/CreateDreamPage.styled";
import { StyledInput } from "../../styled/Input.Styled";

export const CreateDreamPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.dream);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [dreamImage, setDreamImage] = useState(null);
  const [dreamVideo, setDreamVideo] = useState(null);
  const [finalTime, setFinalTime] = useState(null)

  const handleCreateDream = useCallback(() => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("dreamImage", dreamImage);
    formData.append("dreamVideo", dreamVideo);
    formData.append("finalTime", finalTime);
    

    dispatch(createDream(formData)).then((res) => {
      if (!res.error) {
        console.log(formData)
        navigate(`${paths.dream}/${res.payload._id}`, { replace: true });
      }
    });
  }, [ description, dispatch, name, navigate, dreamImage, price,finalTime, dreamVideo]);


  useEffect(() => () => dispatch(resetDreamErrors()),[dispatch])

  return (
    <ContentWrapper className={styles.createDream}>
      <Button
        onClick={() => navigate(-1)}
        isBackButton={true}
        containerClassName={styles.backButtonContainer}
      >
        Назад
      </Button>
      <StyledForm>
        <h1 className={styles.title}>Створити мрію</h1>
        <StyledDatePicker 
        placeholderText="Оберіть кінцеву дату"
        selected={finalTime}
        onChange={date => {setFinalTime(date)}}
        error={errors && errors.finalTime && errors.name.finalTime}
        dateFormat='yy/MM/dd'
        minDate={new Date()}
        />
        <StyledInput
          name="name"
          placeholder="Назва мрії"
          error={errors && errors.name && errors.name.message}
          onChange={(e) => setName(e.target.value)}
        />
        <StyledInput
          name="price"
          placeholder="Ціна мрії"
          error={errors && errors.price && errors.price.message}
          onChange={(e) => setPrice(+e.target.value)}
        />
        <StyledInput
          name="description"
          placeholder="Опис"
          error={errors && errors.description && errors.description.message}
          onChange={(e) => setDescription(e.target.value)}
        />
        <StyledInput
          name="dreamImage"
          placeholder="Ваше фото"
          error={errors && errors.dreamImage && errors.dreamImage.message}
          onChange={(e) => setDreamImage(e.target.value)}
        />
        <StyledInput
          name="dreamVideo"
          placeholder="Відео"
          error={errors && errors.dreamVideo && errors.dreamVideo.message}
          onChange={(e) => setDreamVideo(e.target.value)}
        />
        <Button onClick={handleCreateDream}>Створити</Button>
        
      </StyledForm>
      
    </ContentWrapper>
  );
};
