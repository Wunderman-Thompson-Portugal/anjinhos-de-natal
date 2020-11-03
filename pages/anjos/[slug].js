import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '@/components/container'
import Layout from '@/components/layout'
import DetalheAnjos from '@/components/detalhe-anjos'
import { getAllAnjosWithSlug, getAnjo } from '@/lib/api'
import PostTitle from '@/components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import markdownToHtml from '@/lib/markdownToHtml'
import Intro from '@/components/IntroAnjinhos'

export default function Anjo({ anjo, preview }) {
  const router = useRouter()
  if (!router.isFallback && !anjo?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Intro />
        {router.isFallback ? (
          <PostTitle>A carregar…</PostTitle>
        ) : (
          <>
              <DetalheAnjos
                nome={anjo.nome}
                idade={anjo.idade.anos}
                genero={anjo.genero}
                talhaDaRoupa={anjo.talhaDaRoupa.anos}
                brinquedo={anjo.brinquedo.titulo}
              />

          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getAnjo(params.slug, preview)
  return {
    props: {
      preview,
      anjo: {
        ...data?.anjo
      },
    },
  }
}

export async function getStaticPaths() {
  const allAnjos = await getAllAnjosWithSlug()
  return {
    paths: allAnjos?.map((anjo) => `/posts/${anjo.slug}`) || [],
    fallback: true,
  }
}
