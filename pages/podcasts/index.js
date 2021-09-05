import React from 'react';
import Head from 'next/head'

const index = () => {
    return (
        <>
            <Head>
                <title>Podcasts - WebMag Podcasts</title>
                <meta name="description" content="WebMag podcasts platform. Listen to us on the website, Yandex.Music or Google.Podcast" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section>
                <h1>Podcasts</h1>
            </section>
        </>
    );
}

export default index;
