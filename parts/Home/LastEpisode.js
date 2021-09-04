/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './LastEpisode.module.css'
import Container from '../Common/Container';
import Link from 'next/link'
import LinkWrapper from '../Common/Button';

const LastEpisode = (props) => {

    const { id, image, title, description, date, season, episode, audio } = props;

    return (
        <Container className={styles.lastEpisode__container}>
            <img
                className={styles.lastEpisode__image}
                src={`${image}`}
                alt={title}
            />
            <div className={styles.lastEpisode__content}>
                <p>Last episode</p>
                <h2>{title}</h2>
                <LinkWrapper className={styles.lastEpisode__buttonWrapper} href={`podcasts/${id}`}>Listen now</LinkWrapper>
            </div>
        </Container>
    );
}

export default LastEpisode;
