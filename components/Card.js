import styled from '@emotion/styled'
import Link from 'next/link'

const Card = ({ movie }) => {
  const { API_URL } = process.env

  return (
    <CardStyled>
      <div className="poster">
        <img src={API_URL + movie.poster.url} alt={movie.poster.name} />
      </div>
      <div className="body">
        <h3>{movie.title}</h3>
        <p dangerouslySetInnerHTML={{__html: movie.description}} />
        <Link href="/movies/[genre]/[slug]" as={`/movies/${movie.genre.slug}/${movie.slug}`}>
          <a>More about this movies</a>
        </Link>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  margin-top: 50px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  .poster {
    height: 400px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .body {
    padding: 20px;

    h3 {
      margin-bottom: 20px;
    }
  
    p {
      color: #666;
      line-height: 1.5;
    }

    a {
      display: inline-block;
      margin: 20px 0;
    }
  }
`

export default Card