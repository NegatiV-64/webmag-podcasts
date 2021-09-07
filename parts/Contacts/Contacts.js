import React from 'react';
import Container from '../Common/Container';
import styles from './Contacts.module.css';
import ContactsForm from './ContactsForm';

const Contacts = () => {
    return (
        <Container className={styles.aboutContainer}>
            <h2>Contacts</h2>
            <p>If you have any idea, suggestion or advice, feel free to contact us. We are happy to recieve some feedback from our listeners.</p>
            <ContactsForm />
        </Container>
    );
}

export default Contacts;
