import React from 'react'
import { paths } from '../../paths'
import { StyledNav, StyledLink, Wpapper } from '../../styled/NavBar.styled'
import { MoonIcon } from './icon/moonIcon'
import { SunIcon } from './icon/sunIcon'
// import { ThemeSwitch } from '../../components/ThemeSwitch/ThemeSwitch'
import { Switch } from './switch'
import { LanguageSelector } from '../../components/containers-language/language-selector'

export const NavBar = ({ toggleTheme, isDarkTheme }) => {
  return (
    <StyledNav>
      <LanguageSelector></LanguageSelector>
      <Wpapper>
        <StyledLink to={paths.home}>Home</StyledLink>
        <StyledLink to={paths.dreamList}>Dreams</StyledLink>
        <SunIcon />
        <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <MoonIcon />
        {/* <ThemeSwitch /> */}
      </Wpapper>
    </StyledNav>
  )
}
