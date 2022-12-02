import styled from 'styled-components'

export const StyledDesc = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`
export const ButtonPosition = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledDreamTitle = styled.h1`
  font-size: 45px;
  margin-top: 40px;
`

export const StyledPrice = styled.div`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #2fb5fc;
  @media (max-width: 844px) {
    margin-left: 5px;
    margin-right: 5px;
  }
`
export const StyledTime = styled.div`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #2fb5fc;
`

export const StyledDes = styled.p`
  line-height: 24px;
  color: rgb(148, 163, 184);
`
export const StyledImgContent = styled.img`
  width: 600px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  @media (max-width: 844px) {
    flex-direction: column;
    width: 390px;
  }
`
export const StyledName = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 844px) {
    margin-left: 5px;
  }
`

export const ContentWrapperDream = styled.div`
  display: flex;
  width: 100%;
  margin: 0px 10px;
  padding: 10px 30px;
  position: relative;
  z-index: 2;
  padding: 50px 0;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 80px;
  place-items: center;
  min-height: 50vh;
  @media (max-width: 844px) {
    flex-direction: column;
    width: 300px;
    margin: 0px ;
  }
`
export const ContentMedia = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  margin-top: 10px;
`
export const ContentTime = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const StyledNameСategory = styled.h1`
  font-size: 15px;
  margin-top: 30px;
  @media (max-width: 844px) {
    margin-right: 5px;
    margin-left: 5px;
  }
`
export const StyledNameDescription = styled.h1`
  font-size: 45px;
`
export const PriceStyled = styled.div`
  margin: 0 0 40px;
  font-size: 24px;
  font-weight: bold;
  color: #2fb5fc;
  @media (max-width: 844px) {
    margin-left: 5px;
  }
`
export const IframeStyled = styled.iframe`
  width: 600px;
  height: 400px;
  @media (max-width: 844px) {
    flex-direction: column;
    width: 390px;
    margin: 0px ;
  }
`