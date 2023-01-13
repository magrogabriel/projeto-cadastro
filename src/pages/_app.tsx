import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {NextSeo} from 'next-seo'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <NextSeo
      title="Projeto Cadastro - Se cadastre também!"
      description="Projeto criado a fim de consolidar conceitos e aprendizados ao longo do curso de ReactJs da Udemy"
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: "Projeto Cadastro - Se cadastre também!",
        description: "Projeto criado a fim de consolidar conceitos e aprendizados ao longo do curso de ReactJs da Udemy",
        images: [
          {
            url: 'https://www.example.ie/og-image-01.jpg',
            width: 800,
            height: 600,
            alt: 'Projeto Cadastro realizado com NextJs',
            type: 'image/png',
          },
        ],
        siteName: 'Projeto Cadastro',
      }}
      twitter={{
        handle: '@handle',
        site: '@projetocadastro',
        cardType: 'summary_large_image',
      }}
    />
    <Component {...pageProps} />
  </>
  )
}
