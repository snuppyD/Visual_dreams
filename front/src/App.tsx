import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CreateDreamPage } from './pages/create-dream-page/create-dream-page'
import { HomePage } from './pages/Home/home-page'
import { DreamList } from './pages/dreamsList'
import { DreamPage } from './pages/dream-page'
import { EditDreamPage } from './pages/edit-dream-page/edit-dream-page'
import { OrderPage } from './pages/order-page'
import { paths } from './paths'
import { NavBar } from './pages/Navbar/navBar-page'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import { lightTheme, darkTheme } from './styled/ThemeSwitch.styled'
import { LanguageProvider } from './components/containers-language/language';

import {LanguageSelector} from './components/containers-language/language-selector.js';

function App() {
  const [theme, setTheme] = useState('light')
  const isDarkTheme = theme === 'dark'
  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark')
  }

  return (
    <LanguageProvider>
     {/* <LanguageSelector></LanguageSelector>  */}
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <BrowserRouter>
        <NavBar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Routes>
          <Route path={paths.home} element={<HomePage />} />
          <Route path={paths.dreamList} element={<DreamList />} />
          <Route path={`${paths.dream}/:id`} element={<DreamPage />} />
          <Route path={paths.createDream} element={<CreateDreamPage />} />
          <Route path={paths.order} element={<OrderPage />} />
          <Route path={`${paths.editDream}/:id`} element={<EditDreamPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
     </LanguageProvider>
  )
}

export default App
