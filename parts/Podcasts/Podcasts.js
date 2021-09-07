import React, { useContext } from 'react';
import Container from '../Common/Container';
import PodcastItem from './PodcastItem';
import styles from './Podcasts.module.css'
import PodcastContext from '../../context/podcast-context';

const Podcasts = () => {

    const podcastStore = useContext(PodcastContext)
    const { podcasts } = podcastStore;

    return (
        <Container className={styles.podcasts__container}>
            <h2>Podcasts</h2>
            <ul>
                {podcasts.map(item =>
                    <PodcastItem
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        date={item.date}
                    />
                )}
            </ul>
        </Container>
    );
}

export default Podcasts;
