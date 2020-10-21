import Container from '@/components/container'
import MoreAnjos from '@/components/more-anjos'
import HeroAnjo from '@/components/hero-anjo'
import Intro from '@/components/IntroAnjinhos'
import Layout from '@/components/layout'
import { getAllAnjosForHome } from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'

export default function IndexAnjos({ allAnjos }) {
  const moreAnjos = allAnjos
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {moreAnjos.length > 0 && <MoreAnjos anjos={moreAnjos} />}
        </Container>
      </Layout>
    </>
  )
}


export async function getStaticProps({ preview = false }) {
  const allAnjos = (await getAllAnjosForHome(preview)) || []
  return {
    props: { allAnjos },
    revalidate: 1
  }
}
