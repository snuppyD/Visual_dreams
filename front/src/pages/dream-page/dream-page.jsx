import React, {  useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDream,deleteDream } from "../../store/dream/dreamSlice";
import { Spinner } from "../../components/spinner";
import { Button } from "../../components/button";
import {Todo} from '../../components/todo/Todo';
import { Text } from '../../components/containers-language/language';
import { StyledDesc,PriceStyled,ButtonPosition,StyledTime,ContentTime,IframeStyled,StyledName–°ategory,StyledImgContent,ContentMedia,ContentWrapperDream,StyledDreamTitle,StyledPrice,StyledName } from "../../styled/DreamPage.styled";

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
    let diffInDays = Math.round(diffInTime / oneDay)
    if (diffInDays <= 0) {
    return diffInDays = 1
    } else {
      return diffInDays
    }
  }

  const cost = () => {
    const dateStart= new Date();
    const dateEnd = new Date(finalTime.dream)
    const oneDay = 1000 * 60 * 60 * 24
    const diffInTime = dateEnd.getTime() - dateStart.getTime()
    let diffInDays = Math.round(diffInTime / oneDay)
    if (diffInDays <= 0) {
      diffInDays = 1
      const priceInDay = dream.price / diffInDays
      return priceInDay.toFixed(2)
    }
    
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
          <Text tid="backButton" />
          </Button>
          <Button onClick={() => navigate(`/edit-dream/${id}`) }><Text tid="editButton" /></Button>
          <Button onClick={() => {dispatch(deleteDream(id));navigate('/order') }}><Text tid="deleteButton" /></Button>
          <Button  
            onClick={() => navigate('/') }>
            <Text tid="homeButton" />
          </Button>
          </ButtonPosition>
          <ContentTime>
          <StyledName–°ategory><Text tid="titleCreateTime" /></StyledName–°ategory>
          <StyledName–°ategory><Text tid="titleDeleteTime" /></StyledName–°ategory>
          </ContentTime>
          <ContentTime>
          {finalTime ? <StyledPrice>{new Date(dream.finalTime).toLocaleDateString()}</StyledPrice> : false}
          <StyledPrice>{new Date(dream.createTime).toLocaleDateString()}</StyledPrice>
          </ContentTime>
          <StyledName>
          <StyledDreamTitle>{dream.name}</StyledDreamTitle>
          </StyledName>
          <ContentMedia>
          <StyledImgContent src={dream.dreamImage} alt="" />
          {dream.dreamVideo? <IframeStyled width="600"  height="400" src={dream.dreamVideo} title="YouTube video player"  frameBorder="0" allowFullScreen></IframeStyled> : false}
          </ContentMedia>
          <StyledName–°ategory><Text tid="titleDescription" /></StyledName–°ategory>
          <StyledPrice>{dream.description}</StyledPrice>
          <StyledName–°ategory><Text tid="titleTime" /></StyledName–°ategory>
          {finalTime? <StyledTime>{ time()}</StyledTime> : false}
          <StyledName–°ategory><Text tid="titlePrice" /></StyledName–°ategory>
          <PriceStyled>{dream.price} $</PriceStyled>
          <StyledName–°ategory><Text tid="titlePriceInDay" /></StyledName–°ategory>
          {finalTime?<PriceStyled>{cost()} $</PriceStyled> : false}
          
        <ButtonPosition>
          </ButtonPosition>
          {dream.descriptionTodo ? <Todo dream={dream} id={dream.id} /> : false}
        </StyledDesc>
        <StyledDesc>
        </StyledDesc>
        
      </ContentWrapperDream>
      
    )
  );
};
