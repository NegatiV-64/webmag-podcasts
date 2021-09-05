import React from 'react';
import styles from './HomePodcastItem.module.css'
import Link from 'next/link';
import Image from 'next/image'

const HomePodcastItem = (props) => {
    const { id, image, title, description, date, season, episode, audio } = props;

    return (
        <li className={`${styles.podcastItem}`}>
            <Link href={`podcasts/${id}`}>
                <a>
                    <Image className={styles.podcastItem__wrapper} width={300} height={250} src={image} alt={title} />
                    <p>{date}</p>
                    <h5>{title}</h5>
                </a>
            </Link>
        </li>
    );
}

export default HomePodcastItem;
