import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../../paths";
import { StyledDay,StyledInfo,StyledTitle,StyledPrice,StyledImg } from "../../styled/Dream-item.styled";
// import styles from "./styles.module.css";

export const DreamItem = ({
  name = '',
  price = 0,
  dreamImage = '',
  _id = '',
  finalTime = '',
  dreamVideo= ''
  
}) => {
  const time = () => {
    const dateStart= new Date();
    const dateEnd = new Date(finalTime)
    const oneDay = 1000 * 60 * 60 * 24
    const diffInTime = dateEnd.getTime() - dateStart.getTime()
    const diffInDays = Math.round(diffInTime / oneDay)
    return diffInDays
  }
  return (
    <Link to={`${paths.dream}/${_id}`} >
      <StyledDay>{ time()}</StyledDay>
      { dreamImage && <StyledImg src={dreamImage} alt=""/> }
      <StyledInfo>
        <StyledTitle>{ name }</StyledTitle>
        <StyledPrice>{ price }$</StyledPrice>
      </StyledInfo>
    </Link>
  );
};
