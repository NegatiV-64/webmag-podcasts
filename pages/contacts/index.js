import React from 'react';
import Head from 'next/head'
import Contacts from '../../parts/Contacts/Contacts';

const ContactsPage = () => {
    return (
        <>
            <Head>
                <title>Contacts - WebMag Podcasts</title>
            </Head>
            <section>
                <Contacts />
            </section>
        </>
    );
}

export default ContactsPage;
