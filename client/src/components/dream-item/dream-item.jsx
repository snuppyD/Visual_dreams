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
  capacity = ''
}) => {
  return (
    <Link to={`${paths.dream}/${_id}`} >
      <StyledDay>{ capacity }</StyledDay>
      { dreamImage && <StyledImg src={dreamImage} alt=""/> }
      <StyledInfo>
        <StyledTitle>{ name }</StyledTitle>
        <StyledPrice>{ price }$</StyledPrice>
      </StyledInfo>
    </Link>
  );
};
