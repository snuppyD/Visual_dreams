import styled from 'styled-components'
import DatePicker from 'react-datepicker'

export const StyledForm = styled.div`
  background: rgba(50, 61, 109, 0.5);
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 30px;
  padding: 30px;
  width: 50vh;
`

export const StyledDatePicker = styled(DatePicker)`
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
export const StyledInputSearch = styled.input`
  padding: 10px;
  background: linear-gradient(180deg, rgba(99, 106, 150, 0.4) 0%, rgba(182, 186, 214, 0.25) 100%);
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  outline: none;
  color: #ffffff;
  width: 20%;
  & :placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`
