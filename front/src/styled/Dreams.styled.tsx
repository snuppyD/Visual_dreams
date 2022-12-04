import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledSort = styled.div`
  height: 80px;
  background-color: ${props => props.theme.colorButtonFon};
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  @media (max-width: 844px) {
  margin-bottom: 50px;

  }
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
export const SettingsStled = styled.div`
  display: flex;
  max-width: 1234px;
  width: 100%;
  margin: 0px auto;
  padding: 0 30px;
  position: relative;
  z-index: 2;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 390px) {
    flex-direction: column;
  }
`
export const DreamsSortStled = styled.div`
  display: flex;
  max-width: 1234px;
  width: 100%;
  margin: 0px auto;
  padding: 0 30px;
  position: relative;
  z-index: 2;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 390px) {
    flex-direction: column;
  }
`
export const DreamsGrid = styled.div`
    max-width: 1234px;
    width: 100%;
    margin: 0px auto;
    padding: 0 30px;
    position: relative;
    z-index: 2;
  display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    margin-bottom: 50px;
    @media (max-width: 390px) {
      display: flex;
      flex-direction: column;
      width: 360px;      
  }
`