import Card from 'components/Card'
import fetch from 'isomorphic-unfetch'
import { camelizeKeys } from 'humps'

const Home = ({ movies }) => {
  console.log("Home -> movies", movies)
  return (
    <div className="container">
      {
        movies.map(movie => <Card
          key={movie.id}
          movie={movie}
        />)
      }
    </div>
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

export default Home