import styled from 'styled-components'

export const Q = styled.div`
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
