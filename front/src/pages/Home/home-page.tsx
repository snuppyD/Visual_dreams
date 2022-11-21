import React from 'react'
import { paths } from '../../paths'
import { StyledGeneralText, StyledLinkAnimation, StyledBanner } from '../../styled/Home-page.styled'

export const HomePage = () => {
  return (
    <StyledBanner>
      <StyledGeneralText>Сайт зі створення власних мрій</StyledGeneralText>
      <StyledLinkAnimation to={paths.createDream}>Create New Dreams</StyledLinkAnimation>
    </StyledBanner>
  )
}
