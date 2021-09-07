import Head from 'next/head'

import Home from '../parts/Home/Home'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home - WebMag Podcasts</title>
      </Head>
      <Home />
    </>
  )
}
