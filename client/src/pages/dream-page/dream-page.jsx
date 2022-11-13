import React, {  useEffect } from "react";
import styles from "./styles.module.css";
import { ContentWrapper } from "../../components/content-wrapper";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDream,deleteDream } from "../../store/dream/dreamSlice";
// import { paths } from "../../paths";
import { Spinner } from "../../components/spinner";
import { Button } from "../../components/button";
// import {Todo} from '../../components/todo/Todo'
import { StyledDesc,StyledImgContent,StyledDes,StyledDreamTitle,StyledPrice } from "../../styled/DreamPage.styled";

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
          <StyledDes>{dream.description}</StyledDes>
        </StyledDesc>
        <StyledDesc>
          <StyledImgContent src={dream.dreamImage} alt="" />
        </StyledDesc>
          <Button onClick={() => {dispatch(deleteDream(id));navigate('/order') }}>Delete</Button>
          <Button onClick={() => navigate(`/edit-dream/${id}`) }>edit</Button>
        {/* {edit ? <Todo dream={dream.description}  /> : false} */}

      </ContentWrapper>
      
    )
  );
};
