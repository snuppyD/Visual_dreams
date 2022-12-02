import React, { useContext } from 'react'
import { StyledSelect } from '../../styled/Option.styled'

import { languageOptions } from '../language'
import { LanguageContext } from './language'

export const LanguageSelector = () => {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext)

  // set selected language by calling context method
  const handleLanguageChange = e => userLanguageChange(e.target.value)

  return (
    <StyledSelect onChange={handleLanguageChange} value={userLanguage}>
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </StyledSelect>
  )
}
