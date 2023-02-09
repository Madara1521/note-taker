import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './Components/Redux/rootReducer'


const store = createStore(rootReducer)

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
