import React from 'react'
import { paths } from '../../paths'
import { Text } from '../../components/containers-language/language';

import { StyledGeneralText, StyledLinkAnimation, StyledBanner } from '../../styled/Home-page.styled'


export const HomePage = () => {
 
  return (
    <StyledBanner>
      <StyledGeneralText><Text tid="exploreHeader" /></StyledGeneralText>
      <StyledLinkAnimation to={paths.createDream}><Text tid="exploreButton" /></StyledLinkAnimation>
    </StyledBanner>
  )
}
