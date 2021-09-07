import React from 'react';
import styles from './ContactsForm.module.css'

const ContactsFormTextArea = (props) => {
    const { onSend, value } = props;

    function onTextChangeHander(e) {
        onSend(e.target.value);
    }

    return (
        <textarea
            onChange={onTextChangeHander}
            className={styles.aboutForm__textarea}
            placeholder={"Your Message"}
            value={value}
            required>
        </textarea>
    );
}

export default ContactsFormTextArea;
