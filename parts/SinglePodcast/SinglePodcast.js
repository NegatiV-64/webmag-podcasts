import React, { useContext, useState } from 'react';
import PodcastContext from '../../context/podcast-context';
import styles from './SinglePodcast.module.css'
import Head from 'next/head';
import Image from 'next/image';
import Container from '../Common/Container'
import Loading from '../Common/Loading';
import AudioPlayer from './AudioPlayer';

import VynicPic from '../../public/images/vynil.png'

const SinglePodcast = (props) => {

    const [audioPlayerShow, setAudioPlayerShow] = useState(false);

    function onListenBtnHandler(e) {
        e.preventDefault();
        setAudioPlayerShow(state => !state);
    }

    const { podcastId } = props;
    const contextStore = useContext(PodcastContext);

    if (contextStore.podcasts.length > 0) {
        const { podcasts } = contextStore;
        const currentPodcast = podcasts.filter((item) => item.id === podcastId)[0];
        const { audio, date, description, image, title } = currentPodcast;

        return (
            <>
                <Head>
                    <title>{title}</title>
                </Head>
                <Container className={styles.podcast__container}>
                    <div className={styles.podcastContentWrapper}>
                        <div className={styles.podcastContentWrapper__imageWrapper}>
                            <Image src={VynicPic} alt="Picture of the author" />
                        </div>
                        <div className={styles.podcastContentWrapper__contentWrapper}>
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <button onClick={onListenBtnHandler}>Listen</button>
                        </div>
                    </div>
                    <AudioPlayer isShows={audioPlayerShow} audio={audio} />
                </Container>
            </>
        );
    }

    return (
        <div style={{
            overflow: "hidden"
        }}>
            <Loading />
        </div>
    );
}

export default SinglePodcast;
