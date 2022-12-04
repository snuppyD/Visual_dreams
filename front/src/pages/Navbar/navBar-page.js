import React from 'react'
import { paths } from '../../paths'
import { StyledNav, StyledLink, Wpapper } from '../../styled/NavBar.styled'
import { MoonIcon } from './icon/moonIcon'
import { SunIcon } from './icon/sunIcon'
import { Text } from '../../components/containers-language/language'
// import { ThemeSwitch } from '../../components/ThemeSwitch/ThemeSwitch'
import { Switch } from './switch'
import { LanguageSelector } from '../../components/containers-language/language-selector'

export const NavBar = ({ toggleTheme, isDarkTheme }) => {
  return (
    <StyledNav>
      <LanguageSelector></LanguageSelector>
      <Wpapper>
        <StyledLink to={paths.home}>
          <Text tid="exploreButtonHome" />
        </StyledLink>
        <StyledLink to={paths.dreamList}>
          <Text tid="exploreButtonDream" />
        </StyledLink>
        <SunIcon />
        <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <MoonIcon />
        {/* <ThemeSwitch /> */}
      </Wpapper>
    </StyledNav>
  )
}
