import Header from 'components/Header';
import { ThemeProvider } from 'emotion-theming'
import theme from 'theme/theme.js'
import 'styles/main.css'

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