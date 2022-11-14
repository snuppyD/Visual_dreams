import styled from 'styled-components'

export const AppStyled = styled.div`
  width: 350px;
  margin: 60px auto;
  padding-right: 10px;
  & input {
    font-size: 1.2rem;
    font-family: monospace;
  }
`

export const TodoStyled = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 2rem;
  width: inherit;
  list-style: decimal;
`

export const TodoTextStyled = styled.div`
  width: 175px;
  font-size: 1.5rem;
  height: 2rem;
  overflow: hidden;
  &:hover,
  &:focus {
    position: absolute;
    width: fit-content;
    min-width: 300px;
    height: fit-content;
    background-color: rgba(37, 175, 112, 0.74);
    overflow: visible;
    z-index: 10;
  }
`
export const BtnStyled = styled.button`
  font-size: 1rem;
  background-color: rgb(28, 6, 151);
  color: #fff;
  border-radius: 8px;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background-color: rgb(15, 172, 23);
  }
  &:active {
    background-color: rgb(218, 122, 178);
  }
  &:focus {
    outline: 0;
  }
`

export const EditPlusStyled = styled(BtnStyled)`
  font-size: 0.6rem;
`

export const EditStyled = styled(BtnStyled)`
  //margin-left: 12.7em;
  font-size: 0.6rem;
`

export const UlStyled = styled.ul`
  position: absolute;
  padding-top: 1px;
  padding-left: 1px;
  user-select: none;
  width: 300px;
  & input {
    width: 150px;
  }
`
