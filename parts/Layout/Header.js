import React, { useState } from 'react';
import styles from './Header.module.css'
import Container from '../Common/Container';
import Link from 'next/link';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import { RiMenu5Line } from 'react-icons/ri';
import { HiMicrophone } from 'react-icons/hi'

const Header = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const isMobile = useMediaQuery('(max-width: 576px)')

    function onMobileButtonClickHandler(e) {
        e.preventDefault();
        setShowMobileMenu(prevstate => !prevstate)
    }
    function onMobileLinkClickHandler () {
        setShowMobileMenu(false)
    }

    const DesktopNavMenu = (
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
    )

    const mobileMenu = (
        <React.Fragment>
            <button onClick={onMobileButtonClickHandler} className={styles.mobileBtn}>
                <RiMenu5Line />
            </button>
            <div className={showMobileMenu ? `${styles.mobileMenuWrapper} ${styles.mobileMenuWrapper_active}` : styles.mobileMenuWrapper}>
                <ul className={styles.mobileList}>
                    <li>
                        <Link href="/"><a onClick={onMobileLinkClickHandler}>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/about"><a onClick={onMobileLinkClickHandler}>About</a></Link>
                    </li>
                    <li>
                        <Link href="/podcasts"><a onClick={onMobileLinkClickHandler}>Podcasts</a></Link>
                    </li>
                    <li>
                        <Link href="/contacts"><a onClick={onMobileLinkClickHandler}>Contacts</a></Link>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );

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

                    {isMobile && mobileMenu}
                    {!isMobile && DesktopNavMenu}
                </Container>
            </nav>
        </header>
    );
}

export default Header;
