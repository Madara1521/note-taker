import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { Provider } from 'react-redux'
import store from './Components/Redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App/>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
)
