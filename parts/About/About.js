import React from 'react';
import Container from '../Common/Container';
import Image from 'next/image'
import { FaTelegram, FaInstagram, FaYandex } from 'react-icons/fa'


import styles from './About.module.css'

const About = () => {
    return (
        <Container className={styles.aboutContainer}>
            <h2>About Us</h2>
            <div className={styles.aboutContent}>
                <div className={styles.aboutContent__imageWrapper}>
                    <Image height={450} width={500} src="/images/podcast.png" alt="Webster Magazine Podcast" />
                </div>
                <div className={styles.aboutContent__text}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus reprehenderit, nesciunt libero natus voluptates voluptatem nam laboriosam similique iste accusamus provident laudantium consequuntur ex ad quod quae eius! Ut ipsam labore in facere magni, atque id rem, porro aliquid, optio voluptates error eligendi! Quis qui harum recusandae unde distinctio, impedit architecto ex! Repellat dolores enim vitae itaque doloribus sint nihil autem eius ad, sequi voluptatum fuga, sunt consequatur reiciendis perferendis magni! Tempora, ut minima! Sit fugiat fugit repellat laboriosam.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur nihil exercitationem minus sit qui debitis similique temporibus cupiditate suscipit nisi veritatis excepturi, error voluptas beatae quo neque provident in delectus. Dignissimos, facere vero eum, nihil suscipit sit quisquam eos officiis quasi aliquam maiores velit enim quia, architecto voluptates deserunt quo.</p>
                </div>
            </div>
            <div className={styles.aboutJoin}>
                <h3>Follow Us</h3>
                <ul className={styles.aboutJoin__list}>
                <li><a href="https://t.me/thewebmag"><FaTelegram /></a></li>
                <li><a href="https://www.instagram.com/thewebmag/"><FaInstagram /></a></li>
                <li><a href="#!"><FaYandex /></a></li>
            </ul>
            </div>
        </Container>
    );
}

export default About;
