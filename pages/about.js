import { NextSeo } from 'next-seo'

const About = () => {
  const SEO = {
    title: 'About',
    description: 'Just your normal About Page',
    openGraph: {
      title: 'About',
      description: 'Just your normal About Page',
    },
  }

  return (
    <>
      <NextSeo {...SEO} />
      <h1>I'm an About Page</h1>
    </>
  )
}

export default About