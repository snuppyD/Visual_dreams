import styled from 'styled-components'

export const StyledContainer = styled.div`
  margin: 20px 0;
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const StyledInput = styled.input`
  padding: 10px;
  background: linear-gradient(180deg, rgba(99, 106, 150, 0.4) 0%, rgba(182, 186, 214, 0.25) 100%);
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  outline: none;
  color: #ffffff;
  width: 100%;
  & :placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

export const StyledError = styled.div`
  color: #ffbab3;
  font-size: 15px;
`
