import React, { createContext, useState } from 'react'
import Home from './pages/Home'
export const ThemeContext = createContext()
const App = () => {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className={`${theme}`}>
      <Home />
    </div>


  </ThemeContext.Provider>
}

export default App