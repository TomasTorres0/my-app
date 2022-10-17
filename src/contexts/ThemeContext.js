import { createContext, useState } from "react";

const ThemeContext = createContext(true);

export default ThemeContext;

export const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const switchDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // if(isDarkMode === true) {
    //   setIsDarkMode(false);
    // } else {
    //   setIsDarkMode(true);
    // }
  }

  return (
    <ThemeContext.Provider value={{switchDarkMode, isDarkMode}}>
      {children}
    </ThemeContext.Provider>
  )

}