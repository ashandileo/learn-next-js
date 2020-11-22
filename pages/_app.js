import Header from 'components/Header';
import fetch from 'isomorphic-unfetch'
import { ThemeProvider } from 'emotion-theming'
import theme from 'theme/theme.js'
import getConfig from 'next/config'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import ContextWrapper from 'components/ContextWrapper'

import 'styles/main.css'

const App = ({ Component, pageProps, navigation }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <ContextWrapper navigation={navigation}>
          <Header />
        </ContextWrapper>
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