import Head from 'next/head'

import Home from '../parts/Home/Home'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home - WebMag Podcasts</title>
        <meta name="description" content="WebMag podcasts platform. Listen to us on the website, Yandex.Music or Google.Podcast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  )
}
