import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import SinglePodcast from '../../parts/SinglePodcast/SinglePodcast';

const Podcast = () => {
    const router = useRouter();
    const { podcastId } = router.query;

    return (
        <React.Fragment>
            <section>
                <SinglePodcast  podcastId={podcastId} />
            </section>
        </React.Fragment>
    );
}

export default Podcast;
