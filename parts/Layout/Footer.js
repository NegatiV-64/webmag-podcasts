import React from 'react';
import styles from './Footer.module.css'
import Container from '../Common/Container';
import {DiReact} from 'react-icons/di';
import {FaTelegram, FaInstagram, FaYandex} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container className={styles.footer__container}>
                <ul className={styles.footer__left}>
                   <li>WebMag Podcast</li>
                   <li>{new Date().getFullYear()}</li>
                </ul>
                <div className={styles.footer__center}>
                    <p>Developed with <DiReact/> by Bektemirov Aziz</p>
                </div>
                <ul className={styles.footer__right}>
                    <li><a href="#!"><FaTelegram /></a></li>
                    <li><a href="#!"><FaInstagram /></a></li>
                    <li><a href="#!"><FaYandex /></a></li>
                </ul>
            </Container>
        </footer>
    );
}

export default Footer;
