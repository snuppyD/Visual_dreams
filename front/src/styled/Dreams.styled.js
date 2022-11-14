import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup'

export const StyledSort = styled.div`
  height: 80px;
  background-color: #442d85;
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
`
export const StyledLink = styled(Link)`
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  color: #000000;
  padding: 8px 12px;
`
export const StyledPopUp = styled.button`
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  color: #000000;
  padding: 8px 12px;
`
