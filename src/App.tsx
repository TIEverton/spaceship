import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { StarShipsContextProvider } from './contexts/StarShipsContext'

import Routes from './routes'

import GlobalStyle from './styles/global'

function App() {
  return (
    <>
      <BrowserRouter>
        <StarShipsContextProvider>
          <GlobalStyle />
          <Routes />
        </StarShipsContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
