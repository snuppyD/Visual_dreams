import React, {  useEffect } from "react";
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

  // const [edit, setEdit] = useState(false)
  // useEffect(() => {
  //   navigate('/order');
  // }, [id, navigate]);

  useEffect(() => {
    dispatch(getDream(id)) 
  }, [dispatch, id]);

  if (isLoading) return <Spinner />;

  return (
    dream && (
      <ContentWrapper className={styles.plane}>
        <StyledDesc>
          <Button onClick={() => navigate(-1)} >
            Назад
          </Button>
          <StyledDreamTitle>{dream.name}</StyledDreamTitle>
          <StyledPrice>{dream.price}$</StyledPrice>
          <Button
            containerClassName={styles.buyBtnContainer}
            onClick={() => navigate('/') }
          >
            На головну
          </Button>
          {/* {dream.description.map(elem => {
            
              console.log(elem)
            
            return <StyledDes>{elem.title}</StyledDes> */}
          {/* })} */}
          {/* <StyledDes>{dream.description.title}</StyledDes> */}
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
