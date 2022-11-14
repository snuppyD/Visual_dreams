import React, {  useEffect,useState } from "react";
import styles from "./styles.module.css";
import { ContentWrapper } from "../../components/content-wrapper";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDream,deleteDream } from "../../store/dream/dreamSlice";
import { Spinner } from "../../components/spinner";
import { Button } from "../../components/button";
import { StyledDesc,StyledImgContent,StyledDreamTitle,StyledPrice } from "../../styled/DreamPage.styled";

export const DreamPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { dream, isLoading } = useSelector((state) => state.dream);
  const [finalTime, setFinalTime] = useState({ dream: new Date() })

  const time = () => {
    const dateStart= new Date();
    const dateEnd = new Date(finalTime.dream)
    const oneDay = 1000 * 60 * 60 * 24
    const diffInTime = dateEnd.getTime() - dateStart.getTime()
    const diffInDays = Math.round(diffInTime / oneDay)
    return diffInDays
  }

  useEffect(() => {
    dispatch(getDream(id)).then((dream) => {
      if (dream) {
        setFinalTime({ dream: new Date(dream.finalTime) })
      }
    })
  }, [dispatch, id]);

  if (isLoading) return <Spinner />;

  return (
    dream && (
      <ContentWrapper className={styles.plane}>
        <StyledDesc>
          <Button onClick={() => navigate(-1)} >
            Назад
          </Button>
          {finalTime? <StyledDreamTitle>{ time()}</StyledDreamTitle> : false}
          <StyledDreamTitle>{dream.name}</StyledDreamTitle>
          <StyledPrice>{dream.price}$</StyledPrice>
          <Button
            containerClassName={styles.buyBtnContainer}
            onClick={() => navigate('/') }
          >
            На головну
          </Button>
        </StyledDesc>
        <StyledDesc>
          <StyledImgContent src={dream.dreamImage} alt="" />
          {dream.dreamVideo? <iframe width="600" height="400" src={dream.dreamVideo} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> : false}
        </StyledDesc>
          <Button onClick={() => {dispatch(deleteDream(id));navigate('/order') }}>Delete</Button>
          <Button onClick={() => navigate(`/edit-dream/${id}`) }>edit</Button>
          
        
      </ContentWrapper>
      
    )
  );
};
