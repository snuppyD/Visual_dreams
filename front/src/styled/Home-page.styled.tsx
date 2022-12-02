import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledBanner = styled.div`
  width: 100%;
  height: 97.5vh;
  background: ${props => props.theme.background};
  background-position: center;
  -webkit-background-size: cover;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 2vw;
  color: ${props => props.theme.title};
`
export const Animate = keyframes`
0%{
    transform: scale(0);
}
100%{
    transform: scale(1);
}
`
export const StyledGeneralText = styled.h2`
  font-family: poppins;
  font-size: 65px;
  margin: 0 0 25px;
  animation: 2s ${Animate} 1;
  @media (max-width: 844px) {
    margin-left: 55px;

  }
`
export const StyledLinkAnimation = styled(Link)`
  text-decoration: none;
  padding: 10px 50px;
  color: #fff;
  border: 3px solid #fff;
  transition: 0.6s ease;
  animation: animate 2s 1;
  font-size: 15px;
  font-weight: 900;
  & :hover {
    background-color: #fff;
    color: #000;
  }
`
