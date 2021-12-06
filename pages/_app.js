import { ChakraProvider } from "@chakra-ui/react"
import FunctionContext from '../components/function-context'
import { ThemeProvider } from '../components/theme-context'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ChakraProvider>
        <FunctionContext />
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  )
}