import React, { useState } from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { Button } from '@chakra-ui/react'
import FunctionContext from '../components/function-context'
import ClassContext from '../components/class-context'

export const ThemeContext = React.createContext();


export default function MyApp({ Component, pageProps }) {
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ChakraProvider>
        <Button onClick={toggleTheme}>Toggle Theme</Button>
        <FunctionContext />
        <ClassContext />
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeContext.Provider>
  )
}