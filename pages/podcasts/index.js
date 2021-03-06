import React from 'react';
import Head from 'next/head'
import Podcasts from '../../parts/Podcasts/Podcasts';

const PodcastsListPage = () => {
    return (
        <>
            <Head>
                <title>Podcasts - WebMag Podcasts</title>
            </Head>
            <section>
                <Podcasts />
            </section>
        </>
    );
}

export default PodcastsListPage;
