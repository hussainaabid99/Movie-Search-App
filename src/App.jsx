import './App.css'

import Navbar from './components/Navbar/Navbar.jsx'
import MainRoutes from './routes/Mainroute'

import ThemeContext from './context/ThemeContext.js'
import { useState } from 'react'

function App() {

  const [theme, setTheme] = useState('dark');

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }} >
        <div data-theme={theme} id='app-wrapper'>
          <Navbar />
          <MainRoutes />
        </div>
      </ThemeContext.Provider >
    </>
  )
}

export default App
