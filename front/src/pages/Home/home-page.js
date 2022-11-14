import React from 'react'
import { paths } from '../../paths'
import { StyledGeneralText, StyledLinkAnimation, StyledBanner } from '../../styled/Home-page.styled'
import { StyledGeneralLink } from '../../styled/NavBar.styled'

export const HomePage = () => {
  return (
    <StyledBanner>
      <StyledGeneralText>Сайт зі створення власних мрій</StyledGeneralText>
      <StyledLinkAnimation to={paths.dreamList}>Dreams</StyledLinkAnimation>
    </StyledBanner>
  )
}
