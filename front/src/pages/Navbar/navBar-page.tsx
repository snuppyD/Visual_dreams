import React from 'react'
import { paths } from '../../paths'
import { StyledNav, StyledLink, Wpapper } from '../../styled/NavBar.styled'

export const NavBar = () => {
  return (
    <StyledNav>
      <Wpapper>
        <StyledLink to={paths.home}>Home</StyledLink>
        <StyledLink to={paths.dreamList}>Dreams</StyledLink>
      </Wpapper>
    </StyledNav>
  )
}
