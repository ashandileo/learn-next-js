import Card from 'components/Card'
import fetch from 'isomorphic-unfetch'
import { camelizeKeys } from 'humps'
import { Flex, Box } from 'reflexbox'
import { withTranslation } from '../i18n'

const Home = ({ movies, t }) => {
  console.log("Home -> movies", movies)
  return (
    <Box variant="container">
    <Box my={40} as="h2">{t('Latest Movies')}</Box>
      <Flex
        justifyContent="space-between"
        flexDirection={{ _: "column", md: "row" }}
        mb={100}
        flexWrap="wrap"
      >
        {
          movies?.map(movie => (
            <Box key={movie.id} width={{ _: "100%", md: "30%" }}>
              <Card
                movie={movie}
              />
            </Box>
          ))
        }
      </Flex>
    </Box>
  )
}

export const getServerSideProps = async () => {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/movies`)
  const data = await res.json()

  return {
    props: {
      movies: camelizeKeys(data)
    }
  }
}

export default withTranslation()(Home)