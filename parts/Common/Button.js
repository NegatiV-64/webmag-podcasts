import React from 'react';
import styles from './Button.module.css'
import Link from 'next/link';

const Button = (props) => {
    const classes = props.className ? `${styles.button} ${props.className}` : `${styles.button}`

    return (
        <div className={classes}>
            <Link href={props.href} onClick={props.onClick}>
                {props.children}
            </Link>
        </div>
    );
}

export default Button;
