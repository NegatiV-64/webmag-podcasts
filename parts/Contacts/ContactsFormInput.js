import React, { useState } from 'react';
import styles from './ContactsForm.module.css'

const ContactsFormInput = (props) => {
    const { placeholder, type, required, onSend, value } = props;

    function onInputChangeHandler(e) {
        onSend(e.target.value)
    }

    return (
        <input
            className={styles.aboutForm__input}
            required={required}
            onChange={onInputChangeHandler}
            type={type}
            value={value}
            placeholder={placeholder}
        />
    );
}

export default ContactsFormInput;
