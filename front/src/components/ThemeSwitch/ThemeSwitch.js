import React from 'react'
import { useDispatch } from 'react-redux'
import { StyledThemeSwitch } from '../../styled/ThemeSwitch.styled'
import { changeTheme } from '../../store/dream/dreamSlice'

export const ThemeSwitch = () => {
  const dispatch = useDispatch()

  return (
    <StyledThemeSwitch>
      <span
        onClick={() => {
          dispatch(changeTheme())
        }}
      ></span>
    </StyledThemeSwitch>
  )
}
