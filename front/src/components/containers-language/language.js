import React, { useState, createContext, useContext } from 'react'

import { languageOptions, dictionaryList } from '../language/index'

export const LanguageContext = createContext({
  userLanguage: 'eng',
  dictionary: dictionaryList.eng,
})

export const LanguageProvider = ({ children }) => {
  const defaultLanguage = window.localStorage.getItem('rcml-lang')
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'eng')

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: selected => {
      const newLanguage = languageOptions[selected] ? selected : 'eng'
      setUserLanguage(newLanguage)
      window.localStorage.setItem('rcml-lang', newLanguage)
    },
  }

  return <LanguageContext.Provider value={provider}>{children}</LanguageContext.Provider>
}

export function Text({ tid }) {
  const languageContext = useContext(LanguageContext)

  return languageContext.dictionary[tid] || tid
}
