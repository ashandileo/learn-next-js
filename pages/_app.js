import Header from 'components/Header';
import { ThemeProvider } from '@emotion/react';
import 'styles/main.css'

const theme = {
  colors: {
    primary: '#ff0000'
  }
}

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App