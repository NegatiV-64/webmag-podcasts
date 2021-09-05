import React from 'react';
import styles from './Header.module.css'
import Container from '../Common/Container';
import Link from 'next/link'

import { HiMicrophone } from 'react-icons/hi'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Container className={styles.nav__container}>
                    <Link passHref href="/">
                        <a className={styles.nav__logo}>
                            <HiMicrophone />
                            Webster Magazine
                            Podcast
                        </a>
                    </Link>
                    <ul className={styles.nav__list}>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/podcasts">Podcasts</Link>
                        </li>
                        <li>
                            <Link href="/contacts">Contacts</Link>
                        </li>
                    </ul>
                </Container>
            </nav>
        </header>
    );
}

export default Header;
