import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App'
import './index.css'
// import { GlobalStyle } from './styled/Global.styled'
// import MyTemeProvider from './styled/ThemeProvider.styled'
const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
