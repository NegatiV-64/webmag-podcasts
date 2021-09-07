/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link'
import Button from '../Common/Button';
import styles from './PodcastItem.module.css'

const PodcastItem = (props) => {

    const {id, image, title, date } = props;
    const podcastLink = `podcasts/${id}`

    return (
        <li className={styles.podcastItem}>
            <img src={image} alt={title} />
            <div className={styles.podcastItem__content}>
                <h5>{title}</h5>
                <p>{date}</p>
            </div>
            <Button className={styles.podcastItem__button} href={podcastLink}>Listen</Button>
        </li>
    );
}

export default PodcastItem;
