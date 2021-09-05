import React, { useEffect, useState, useCallback, useContext, useRef } from 'react';
import Main from '../Common/Main';
import styles from './Home.module.css'
import LastEpisode from './LastEpisode';
import HomePodcastList from './HomePodcastList';
import PodcastContext from '../../context/podcast-context';

const Home = (props) => {

    const contextPodcast = useContext(PodcastContext);
    const podcastData = contextPodcast.podcasts

    if (podcastData.length > 0) {
        return (
            <Main>
                <section className={styles.lastEpidsode}>
                    <LastEpisode
                        id={podcastData[0].id}
                        image={podcastData[0].image}
                        title={podcastData[0].title}
                        description={podcastData[0].description}
                        date={podcastData[0].date}
                        season={podcastData[0].season}
                        episode={podcastData[0].episode}
                        audio={podcastData[0].audio}
                    />
                </section>
                <section>
                    <HomePodcastList podcasts={podcastData.filter((item, index) => index > 0)} />
                </section>
            </Main>
        );
    }

    return (
        <Main>
            <section className={styles.lastEpidsode}>
                <h1>Not a Last episode</h1>
            </section>
        </Main>
    );
}

export default Home;
