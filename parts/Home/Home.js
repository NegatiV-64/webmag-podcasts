import React, { useEffect, useState, useCallback } from 'react';
import Main from '../Common/Main';
import Container from '../Common/Container';
import styles from './Home.module.css'
import LastEpisode from './LastEpisode';

const Home = (props) => {

    const [podcastData, setPodcastData] = useState([]);
    const [loadingState, setLoadingState] = useState(false);
    const [errorState, setErrorState] = useState(false);

    const fetchingData = useCallback(
        async () => {
            setLoadingState(true)
            try {
                const response = await fetch("./podcastData.json")
                if (!response.ok) {
                    throw new Error("Something went wrong")
                }
                const data = await response.json();
                setPodcastData(data);
            } catch (error) {
                setErrorState(true);
            }
            setLoadingState(false)
        },
        [],
    )

    useEffect(() => {
        fetchingData();
    }, [fetchingData]);

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
                <section></section>
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
