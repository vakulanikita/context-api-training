import { useTheme, useThemeUpdate } from './theme-context'
import { Button } from '@chakra-ui/react'

export default function FunctionContext() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate()
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  }
  return (
    <>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
      <div style={themeStyles}>Function Theme</div>
    </>
  )
}