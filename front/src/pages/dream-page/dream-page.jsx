import React, {  useEffect,useState } from "react";
import styles from "./styles.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDream,deleteDream } from "../../store/dream/dreamSlice";
import { Spinner } from "../../components/spinner";
import { Button } from "../../components/button";
import { StyledDesc,PriceStyled,ButtonPosition,StyledTime,StyledNameСategory,StyledImgContent,ContentMedia,ContentWrapperDream,StyledDreamTitle,StyledPrice,StyledName } from "../../styled/DreamPage.styled";

export const DreamPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { dream, isLoading } = useSelector((state) => state.dream);
  const [finalTime, setFinalTime] = useState(null)

  

  const time = () => {
    const dateStart= new Date();
    const dateEnd = new Date(finalTime.dream)
    const oneDay = 1000 * 60 * 60 * 24
    const diffInTime = dateEnd.getTime() - dateStart.getTime()
    const diffInDays = Math.round(diffInTime / oneDay)
    return diffInDays
  }

  const cost = () => {
    const dateStart= new Date();
    const dateEnd = new Date(finalTime.dream)
    const oneDay = 1000 * 60 * 60 * 24
    const diffInTime = dateEnd.getTime() - dateStart.getTime()
    const diffInDays = Math.round(diffInTime / oneDay)
    const priceInDay = dream.price / diffInDays
    return priceInDay.toFixed(2)
  }

  useEffect(() => {
    dispatch(getDream(id)).then(() => {
      if (dream) {
        setFinalTime({dream: dream.finalTime})
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, id]);

  if (isLoading) return <Spinner />;

  return (
    dream && (
      <ContentWrapperDream>
        <StyledDesc>
          <ButtonPosition>
          <Button onClick={() => navigate(-1)} >
            Назад
          </Button>
          <Button
            containerClassName={styles.buyBtnContainer}
            onClick={() => navigate('/') }>
            На головну
          </Button>
          </ButtonPosition>
          <StyledName>
          <StyledDreamTitle>{dream.name}</StyledDreamTitle>
          </StyledName>
          <ContentMedia>
          <StyledImgContent src={dream.dreamImage} alt="" />
          {dream.dreamVideo? <iframe width="600"  height="400" src={dream.dreamVideo} title="YouTube video player"  frameBorder="0" allowFullScreen></iframe> : false}
          </ContentMedia>
          <StyledNameСategory>Description:</StyledNameСategory>
          <StyledPrice>{dream.description}</StyledPrice>
          <StyledNameСategory>Time when end dream:</StyledNameСategory>
          {finalTime? <StyledTime>{ time()}</StyledTime> : false}
          <StyledNameСategory>Price:</StyledNameСategory>
          <PriceStyled>{dream.price} $</PriceStyled>
          <StyledNameСategory>How much $ to save per day</StyledNameСategory>
          {finalTime?<PriceStyled>{cost()} $</PriceStyled> : false}
          
        <ButtonPosition>
          <Button onClick={() => navigate(`/edit-dream/${id}`) }>edit</Button>
          <Button onClick={() => {dispatch(deleteDream(id));navigate('/order') }}>Delete</Button>
          </ButtonPosition>
        </StyledDesc>
        <StyledDesc>
        </StyledDesc>
        
      </ContentWrapperDream>
      
    )
  );
};
