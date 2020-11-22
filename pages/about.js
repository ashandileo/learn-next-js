import { NextSeo } from 'next-seo'
import { Flex, Box } from 'reflexbox'

const About = ({ page }) => {
  const SEO = {
    title: page.title,
    description: 'Just your normal About Page',

    openGraph: {
      title: page.title,
      description: 'Just your normal About Page',
    },
  }

  return (
    <>
      <NextSeo {...SEO} />
      <Box variant="container">
        <Box as="h2" my={40}>{page.title}</Box>
        <p dangerouslySetInnerHTML={{ __html: page.content }} />
      </Box>
    </>
  )
}

export const getStaticProps = async () => {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/pages/1`)
  const data = await res.json()

  return {
    props: {
      page: data
    }
  }
}

export default About