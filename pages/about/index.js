import React, { Fragment } from 'react';
import Head from 'next/head';
import About from '../../parts/About/About';

const AboutPage = () => {
    return (
        <Fragment>
            <Head>
                <title>About us - WebMag Podcasts</title>
            </Head>
            <section>
                <About />
            </section>
        </Fragment>
    );
}

export default AboutPage;
