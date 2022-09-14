import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { myDarkTheme } from '../themes'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={ myDarkTheme }
    >
      <Component {...pageProps} />
    </MantineProvider>
    
  )
}

export default MyApp
