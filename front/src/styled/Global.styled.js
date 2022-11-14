import { createGlobalStyle } from 'styled-components'
import { themes } from './ThemeProvider.styled'

export const StyledBody =
  createGlobalStyle <
  { themes } >
  `
body{
    margin: 0;
    padding: 0;
}
`
