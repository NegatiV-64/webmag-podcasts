import React from 'react';
import styles from './HomePodcastList.module.css'
import Container from '../Common/Container';
import HomePodcastItem from './HomePodcastItem';

const HomePodcastList = (props) => {

    const podcastsList = props.podcasts;

    return (
        <Container className={styles.podcasts__container}>
            <ul>
                {podcastsList.map(item =>
                    <HomePodcastItem
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        date={item.date}
                        season={item.season}
                        episode={item.episode}
                        audio={item.audio}
                    />
                )}
            </ul>
        </Container>
    );
}

export default HomePodcastList;
