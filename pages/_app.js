import Header from 'components/Header';
import fetch from 'isomorphic-unfetch'
import { ThemeProvider } from 'emotion-theming'
import theme from 'theme/theme.js'
import getConfig from 'next/config'
import 'styles/main.css'

const App = ({ Component, pageProps, navigation }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header navigation={navigation} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

const { publicRuntimeConfig } = getConfig()

App.getInitialProps = async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
  const data = await res.json()

  return {
    navigation: data
  }
}

export default App