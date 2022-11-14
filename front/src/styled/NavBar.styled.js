import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledNav = styled.div`
  position: absolute;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`
export const Wpapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  text-decoration: none;
  font-size: 20px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-family: poppins;
  margin-right: 25px;
`

export const StyledBanner = styled.div`
  width: 100%;
  height: 100vh;
  background: url(https://images.pexels.com/photos/358528/pexels-photo-358528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
  background-position: center;
  -webkit-background-size: cover;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 2vw;
  color: #fff;
`
