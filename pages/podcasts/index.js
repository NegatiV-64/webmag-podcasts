import React from 'react';
import Head from 'next/head'
import Podcasts from '../../parts/Podcasts/Podcasts';

const PodcastsListPage = () => {
    return (
        <>
            <Head>
                <title>Podcasts - WebMag Podcasts</title>
                <meta name="description" content="WebMag podcasts platform. Listen to us on the website, Yandex.Music or Google.Podcast" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section>
                <Podcasts />
            </section>
        </>
    );
}

export default PodcastsListPage;
