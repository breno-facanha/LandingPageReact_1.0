import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>,
)
