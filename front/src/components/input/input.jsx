import React from "react";
import { StyledContainer,StyledInput,StyledError } from "../../styled/Input.Styled";

export const Input = ({
  type = "text",
  name = "",
  placeholder = "",
  onChange = () => null,
  error = "",
}) => {
  return (
    <StyledContainer>
      <StyledInput
        type={type}
        name={ name }
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <StyledError>{error}</StyledError>}
    </StyledContainer>
  );
};
