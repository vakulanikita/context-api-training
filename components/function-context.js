import React, { useContext } from 'react';
import { ThemeContext } from '../pages/_app';

export default function FunctionContext() {
  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  }
  return (
    <div style={themeStyles}>Function Theme</div>
  )
}