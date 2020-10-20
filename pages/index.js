import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import MoreAnjos from '@/components/more-anjos'
import HeroPost from '@/components/hero-post'
import HeroAnjo from '@/components/hero-anjo'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import { getAllPostsForHome } from '@/lib/api'
import { getAllAnjosForHome } from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'

export function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export default function IndexAnjos({ allAnjos }) {
  const heroAnjo = allAnjos[0]
  const moreAnjos = allAnjos.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroAnjo && (
            <HeroAnjo
              nome={heroAnjo.nome}
              brinquedo={heroAnjo.brinquedo.titulo}
              genero={heroAnjo.genero}
              talhaDaRoupa={heroAnjo.talhaDaRoupa.anos}
              idade={heroAnjo.idade.anos}
              />
          )}
          {moreAnjos.length > 0 && <MoreAnjos anjos={moreAnjos} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticPropsWhatIsProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  return {
    props: { allPosts },
  }
}

export async function getStaticProps({ preview = false }) {
  const allAnjos = (await getAllAnjosForHome(preview)) || []
  return {
    props: { allAnjos },
  }
}
