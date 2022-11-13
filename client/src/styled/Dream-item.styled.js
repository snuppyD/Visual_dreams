import styled from 'styled-components'

export const StyledDay = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  font-size: 24px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  color: #ffffff;
  display: grid;
  place-items: center;
  border-radius: 50%;
  z-index: 2;
`
export const StyledImg = styled.img`
  aspect-ratio: 3 / 2;
  object-fit: cover;
  border-radius: 20px;
  transform: scale(1.04);
`

export const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  color: white;
  background: rgba(50, 61, 109, 0.5);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

export const StyledTitle = styled.h2`
  font-size: 24px;
`
export const StyledPrice = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #2fb5fc;
`
