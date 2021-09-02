import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebMag Podcasts</title>
        <meta name="description" content="WebMag podcasts platform. Listen to us on the website, Yandex.Music or Google.Podcast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <h1>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </div>
      </main>

    </div>
  )
}
