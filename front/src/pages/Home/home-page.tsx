import React, { useContext, useState } from 'react'
import { paths } from '../../paths'
import { Text, LanguageContext } from '../../components/containers-language/language';

import { StyledGeneralText, StyledLinkAnimation, StyledBanner } from '../../styled/Home-page.styled'


export const HomePage = () => {
  // const [clickText, setClickText] = useState();
  // const [selectedOption, setSelectedOption] = useState();
  const { dictionary } = useContext(LanguageContext);
  return (
    <StyledBanner>
      <StyledGeneralText><Text tid="exploreHeader" /></StyledGeneralText>
      <StyledLinkAnimation to={paths.createDream}>Create New Dreams</StyledLinkAnimation>
    </StyledBanner>
  )
}
