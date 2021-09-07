import React, { useState } from 'react';
import ContactsFormInput from './ContactsFormInput';
import styles from './ContactsForm.module.css'
import ContactsFormTextArea from './ContactsFormTextArea';

const ContactsForm = () => {

    const [userName, setUserState] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMsg, setUserMsg] = useState("")

    function onFormSubmissionHandler(e) {
        e.preventDefault();
        const messageBody = {
            name: userName,
            email: userEmail,
            message: userMsg,
        }
        
        fetch("/api/formHandler", {
            method: "POST",
            body: JSON.stringify({
                message: messageBody
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))

        // setUserState("");
        // setUserEmail("");
        // setUserMsg("")
    }

    return (
        <div className={styles.aboutFormWrapper}>
            <form onSubmit={onFormSubmissionHandler} className={styles.aboutForm}>
                <div>
                    <ContactsFormInput
                        onSend={setUserState}
                        value={userName}
                        type={"text"}
                        placeholder={"Your name"}
                        required={true}
                    />
                    <ContactsFormInput
                        onSend={setUserEmail}
                        value={userEmail}
                        type={"email"}
                        placeholder={"Your email"}
                        required={true}
                    />
                </div>
                <ContactsFormTextArea
                    value={userMsg}
                    onSend={setUserMsg}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ContactsForm;
